import React, { useState } from 'react'

export default function Test() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>我是测试组件test</h1>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <p>当前计数：{count}</p>
        </div>
    )
}
