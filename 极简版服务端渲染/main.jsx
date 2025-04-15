// 客户端入口
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import Test from './test.jsx'

hydrateRoot(document.getElementById('app'), <Test />)
