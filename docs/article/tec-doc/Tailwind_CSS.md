# 🎈TailWind CSS

$$
只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。
$$

## 💞一、创建项目+vite

```shell
npm create vite@latest my-project -- --template react
cd my-project
```

## ✨二、安装tailwind css

安装tailwindcss的同时还要安装其对等依赖项

```shell
npm install -D tailwindcss postcss autoprefixer
```

## 🎶三、安装相应配置文件

```shell
npx tailwindcss init -p
```

生成`tailwind.config.js`和`postcss.config.js`两个文件

## 🐚四、修改对应的配置文件

```js
//tailwind.config.js。

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```js
//postcss.config.js

export default {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
  },
};
```

1. 创建`postcss.config.js`文件，这里的配置主要是添加`tailwindcss`的插件，这样你编写的css才会被`tailwindcss`处理；
2. 创建`tailwind.config.js`文件，主要进行扫描规则、主题、插件等配置。

修改完这两个配置文件同样要对`vite.config.js`进行修改

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
+ import tailwindcss from "tailwindcss";

+ import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
+ css: {
+   postcss: {
+     plugins: [
+       tailwindcss,
+       autoprefixer
+     ]
+   }
+ }
})
```

## 🦢五、引入Tailwind的基本指令

```css
// tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

引入方式

```js
//main.js
import './tailwind.css'
```

## 🐧六、开始使用tailwind css

$$
让css停不下来
$$

```html
<h1 className="text-3xl font-bold underline">Hello world!</h1>
```

这样你就得到了一个具有以下css属性的`Hello world!`

```css
font-size: 1.875rem;
line-height: 2.25rem;
font-weight: 700;
text-decoration-line: underline;
```

下面我们将画一个32px宽，32px高，蓝色的盒子

```html
<div className="w-32 h-32 bg-blue-500"></div>
```

详细用法，等待更新······
