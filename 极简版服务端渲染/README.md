# 极简服务端渲染

## 核心文件index.js

在该文件中做了服务启动，vite中间件挂载、vite模板渲染、vite进行react组件渲染，以及最终页面融合返回的过程

## render.jsx渲染组件

利用react提供的服务端组件渲染方法renderToString，将组建test.jsx渲染成字符串，并返回。

通过在index.js中加载这个字符串，替换html内容，实现服务端渲染。

## main.jsx渲染组件
主要完成水和的过程，保证状态组件在渲染后能正常生效

