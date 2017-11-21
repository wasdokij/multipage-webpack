# 多页脚手架

## 项目背景
1. ES6 进行开发
2. 自动压缩合并 CSS 和 JS 文件
3. 使用 ESLint 进行代码检查
4. 自动生成 HTML 文件
5. 自动抽取 CSS 文件

###### css 文件单独抽取合并为 style.css。（根据需求，自己修改为独立的css）

## 第一步：拉取项目安装

git clone 安装：

```bash
npm install
```
## 第二步：运行
```bash
npm run dev ---进入开发环境
npm run build ---进入生产环境
npm run lint ---执行代码检查
npm run serve ---服务器环境下预览（打开浏览器）
npm run serve2 ---服务器环境下预览（不打开浏览器）
```

###########目录结构描述
```bash
├── app                         // 静态资源
│   ├── css
│   ├── html
│   ├── img
│   ├── js
│   └── lib
├── config|
│   ├── config.js
│   ├── webpack.config.base.js  // 基础配置文件
│   ├── webpack.config.dev.js   // 开发环境配置文件
│   ├── webpack.config.lint.js  // ESLint
│   └── webpack.config.prod.js  // 生产环境配置文件，主要用来压缩、合并和抽取js。
├── .babelrc
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── package.json postcss.config.js
├── postcss.config.js
└── webpack.config.js
```

