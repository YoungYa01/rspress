# pm2

> NODE.JS进程管理工具
>
> [快速开始 | PM2中文网 (fenxianglu.cn)](https://pm2.fenxianglu.cn/docs/start)

## 安装

```shell
npm install -g pm2
```

## 使用

首次启动命令

```shell
pm2 start js文件/json文件
# or
pm2 start start-app.json
```

查看PM2管理的程序列表

```shell
pm2 list
```

重启命令

```shell
pm2 restart js文件/json文件/指定的name/id
```

停止命令

```shell
pm2 stop 指定的name/id
```

删除PM2管理的程序

```shell
pm2 delete 指定的id/name
```

查看监控信息

```shell
pm2 monit
```

保存当前进行的进程

```shell
pm2 save
```

设置开机自启动

```shell
pm2 startup
```



## 负载均衡

`PM2` 内置自动负载均衡器，它将在每个进程之间共享所有 `HTTP[s]/Websocket/TCP/UDP` 连接。

在集群模式下启动应用程序：

```text
pm2 start app.js -i max
```

[在此处](https://pm2.fenxianglu.cn/docs/general/cluster-mode)阅读有关集群模式的更多信息。



ecosystem配置文件

您还可以创建一个名为 Ecosystem File 的配置文件来管理多个应用程序。

```text
pm2 ecosystem
```



这将生成一个 `ecosystem.config.js` 文件：

```js
module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }, {
    name: 'worker',
    script: 'worker.js'
  }]
}
```



启动：

```text
pm2 start process.yml
```

[在此处](https://pm2.fenxianglu.cn/docs/general/configuration-file)阅读有关应用程序声明的更多信息。



## 开机启动

启动：

```text
pm2 startup
```



保存：

```text
pm2 save
```



[在此处](https://pm2.fenxianglu.cn/docs/general/persistent-application)阅读有关启动脚本的更多信息。

## 应用监听

`--watch`选项很简单：

```text
cd /path/to/my/app
pm2 start env.js --watch --ignore-watch="node_modules"
```



这将在当前目录 + 所有子文件夹中的任何文件更改时监视并重新启动应用程序，并且它将忽略 `node_modules` 文件夹中的任何更改`--ignore-watch="node_modules"`。

然后，您可以使用`pm2 logs`来检查重新启动的应用程序日志。

## 更新PM2

全局安装新最版本的PM2：

```text
npm install pm2@latest -g
```



然后更新内存中的 `PM2` ：

```text
pm2 update
```



>其他高级操作如启动文件env配置，负载均衡启动，性能监控等请参考官方文档[快速开始 | PM2中文网 (fenxianglu.cn)](https://pm2.fenxianglu.cn/docs/start)



## 命令列表

```shell
# Fork 模式
pm2 start app.js --name my-api # 程序名

# Cluster 模式
pm2 start app.js -i 0        # 将根据可用的 CPU 使用 LB 启动最大进程
pm2 start app.js -i max      # 和上面一样，但是不推荐使用。
pm2 scale app +3             # Scales `app` up by 3 workers
pm2 scale app 2              # Scales `app` up or down to 2 workers total

# Listing

pm2 list               # 显示所有进程状态
pm2 jlist              # 以原始JSON格式打印进程列表
pm2 prettylist         # 以美化的JSON格式打印进程列表

pm2 describe 0         # 显示指定进程的所有信息

pm2 monit              # 监控所有进程

# Logs

pm2 logs [--raw]       # 在流中显示所有进程日志
pm2 flush              # 清空所有日志文件
pm2 reloadLogs         # 重新加载所有日志

# Actions

pm2 stop all           # 停止所有进程
pm2 restart all        # 重启所有进程

pm2 reload all         # 将 0s 宕机机时间重新加载（对于 NETWORKED 应用程序）

pm2 stop 0             # 停止指定进程id
pm2 restart 0          # 重启指定进程id

pm2 delete 0           # 将进程从pm2列表中删除
pm2 delete all         # 将从pm2列表中删除所有进程

# Misc

pm2 reset <process>    # 重置元数据(重启时间…)
pm2 updatePM2          # 在内存中更新pm2
pm2 ping               # 确保pm2守护进程已经启动
pm2 sendSignal SIGUSR2 my-app # 向脚本发送系统信号
pm2 start app.js --no-daemon
pm2 start app.js --no-vizion
pm2 start app.js --no-autorestart
```

