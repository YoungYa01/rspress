
# GitHub Actions 自动化部署 (CI/CD)

## GitHub Actions 自动化部署 CI/CD 流程总结

### 1. 核心概念

**CI/CD 流程：**

- **持续集成 (CI)**：代码推送到仓库后自动构建和测试
- **持续部署 (CD)**：通过测试后自动部署到服务器

---

### 2. 基础工作流配置

#### 文件位置
```
.github/workflows/deploy.yml
```

#### 基础模板

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

env:
  NODE_VERSION: '18'

jobs:
  # 测试阶段
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

  # 构建和部署阶段
  build-and-deploy:
    needs: test  # 依赖测试阶段
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'  # 仅 main 分支部署

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Deploy to server
        run: |
          # 部署脚本
```

---

### 3. 部署策略选择

#### 方案 A：SSH + Rsync（推荐）

```yaml
- name: Deploy via SSH
  env:
    SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
  run: |
    mkdir -p ~/.ssh
    echo "$SSH_PRIVATE_KEY" > ~/.ssh/deploy_key
    chmod 600 ~/.ssh/deploy_key

    ssh-keyscan -H ${{ secrets.REMOTE_HOST }} >> ~/.ssh/known_hosts

    # 使用 rsync 同步文件
    rsync -avz --delete -e "ssh -i ~/.ssh/deploy_key" \
      dist/ \
      ${{ secrets.REMOTE_USER }}@${{ secrets.REMOTE_HOST }}:${{ secrets.DEPLOY_TARGET }}
```

#### 方案 B：SCP + Tar（更稳定）

```yaml
- name: Deploy via SCP
  env:
    SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
  run: |
    mkdir -p ~/.ssh
    echo "$SSH_PRIVATE_KEY" > ~/.ssh/deploy_key
    chmod 600 ~/.ssh/deploy_key

    # 创建部署包
    tar -czf deploy.tar.gz -C dist .

    # 上传并解压
    scp -i ~/.ssh/deploy_key deploy.tar.gz \
      ${{ secrets.REMOTE_USER }}@${{ secrets.REMOTE_HOST }}:/tmp/

    ssh -i ~/.ssh/deploy_key ${{ secrets.REMOTE_USER }}@${{ secrets.REMOTE_HOST }} "
      mkdir -p ${{ secrets.DEPLOY_TARGET }}
      tar -xzf /tmp/deploy.tar.gz -C ${{ secrets.DEPLOY_TARGET }}
      chown -R www-data:www-data ${{ secrets.DEPLOY_TARGET }}
      rm /tmp/deploy.tar.gz
    "
```

---

### 4. GitHub Secrets 配置

在仓库 **Settings → Secrets and variables → Actions** 中配置：

| Secret            | 名称         | 说明                     | 示例                                                  |
|-------------------|--------------|--------------------------|-------------------------------------------------------|
| `SERVER_SSH_KEY`  | 服务器私钥   | SSH 私钥（PEM 格式）     | `-----BEGIN OPENSSH PRIVATE KEY-----...`             |
| `REMOTE_HOST`     | 服务器地址   | 域名或 IP                | `your-domain.com` 或 `192.168.1.100`                 |
| `REMOTE_USER`     | 服务器用户名 | 部署专用用户             | `deployer`                                            |
| `DEPLOY_TARGET`   | 部署目录     | 服务器上的目标路径       | `/var/www/your-app`                                   |

---

### 5. 服务器端配置

#### 创建部署用户

```bash
# 创建专用部署用户
sudo adduser deployer
sudo usermod -aG www-data deployer
```

#### 配置 SSH 密钥（可选，用于本地调试）

> ⚠️ 注意：GitHub Actions 使用的是 **Secrets 中的私钥**，服务器只需公钥。

```bash
sudo su - deployer
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

# === 复制以下私钥到 GitHub Secrets ===
cat ~/.ssh/id_rsa

chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

#### 设置目录权限

```bash
sudo mkdir -p /var/www/your-app
sudo chown -R deployer:www-data /var/www/your-app
sudo chmod -R 775 /var/www/your-app
```

---

### 6. 完整的工作流示例（Rspress 项目）

```yaml
name: Deploy Rspress Site

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build project
        run: npm run build
        
      - name: Setup SSH
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.SERVER_SSH_KEY }}" > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          ssh-keyscan -H ${{ secrets.REMOTE_HOST }} >> ~/.ssh/known_hosts
          
      - name: Test connection
        run: |
          ssh -i ~/.ssh/deploy_key ${{ secrets.REMOTE_USER }}@${{ secrets.REMOTE_HOST }} "echo 'SSH连接成功'"
          
      - name: Deploy files
        run: |
          rsync -avz --progress --delete \
            -e "ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no" \
            doc_build/ \
            ${{ secrets.REMOTE_USER }}@${{ secrets.REMOTE_HOST }}:${{ secrets.DEPLOY_TARGET }}
            
      - name: Verify deployment
        run: |
          ssh -i ~/.ssh/deploy_key ${{ secrets.REMOTE_USER }}@${{ secrets.REMOTE_HOST }} "
            echo '部署完成！'
            ls -la ${{ secrets.DEPLOY_TARGET }} | head -10
          "
```

---

### 7. 高级功能

#### 多环境部署

```yaml
env:
  DEVELOPMENT_DEPLOY_TARGET: '/var/www/dev'
  PRODUCTION_DEPLOY_TARGET: '/var/www/prod'

jobs:
  deploy-dev:
    environment: development
    if: github.ref == 'refs/heads/develop'
    # ... steps ...

  deploy-prod:
    environment: production  
    if: github.ref == 'refs/heads/main'
    # ... steps ...
```

#### 部署通知（Slack）

```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
  if: always()
```

#### 依赖缓存优化

```yaml
- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: |
      node_modules
      ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

---

### 8. 故障排除清单

#### 🔑 SSH 连接问题
- ✅ 私钥格式正确（完整的 PEM 格式，包含首尾标记）
- ✅ 公钥已添加到服务器 `~/.ssh/authorized_keys`
- ✅ 文件权限正确：`.ssh` 目录 `700`，密钥文件 `600`
- ✅ 服务器 `/etc/ssh/sshd_config` 中启用 `PubkeyAuthentication yes`

#### 📦 部署问题
- ✅ 构建输出目录正确（如 `dist/`、`public/`、`doc_build/`）
- ✅ 目标目录存在且部署用户有写入权限
- ✅ 服务器防火墙开放 SSH 端口（默认 22）
- ✅ Web 服务器（Nginx/Apache）配置指向正确目录

#### 🐞 调试技巧

```yaml
- name: Debug info
  run: |
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
    echo "Build directory:"
    ls -la dist/
```

---

### 9. 最佳实践

- **安全性**：使用专用部署用户（如 `deployer`），避免使用 `root`
- **可靠性**：先测试后部署，使用 `needs` 控制任务依赖
- **可维护性**：通过 `env` 和 `secrets` 管理配置，避免硬编码
- **监控性**：添加部署通知、状态检查和日志输出
- **回滚准备**：保留历史版本或使用版本化部署目录（如 `/var/www/app-v1.2.3`）

---