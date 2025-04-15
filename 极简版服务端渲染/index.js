import express from 'express';
import fs from 'node:fs';
import { createServer } from "vite"

// 利用vite服务做中间件，进行代码构建工作
const vite = await createServer({
    server: {
        middlewareMode: true    
    },
    appType: 'custom'
})

const app = express()

app.use(vite.middlewares) // 挂载中间件

app.use('*', async (req, res) => {
    // 使用vite进行模板渲染
    const template = await vite.transformIndexHtml(req.url, fs.readFileSync('index.html', 'utf-8'))
    // 用vite进行组件渲染
    const { render } = await vite.ssrLoadModule("render.jsx")
    // 将react组件挂载到模板
    const reactHtml = render()
    const html = template.replace('<!-- 替换react代码 -->', reactHtml)
    // 渲染最终模板
    res.send(html)
})

app.listen(3211, () => {
    console.log('Server is running on port 3211');
});

