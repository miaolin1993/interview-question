import React from 'react'
import { renderToString } from 'react-dom/server'
import Test from './test.jsx'

export function render() {
    return renderToString(<Test />)
}

