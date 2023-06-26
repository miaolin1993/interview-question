// 节流函数，一段时间内多次触发，只执行一次
const throttle = (fn, timer = 1000) => {
  let pre = new Date()
  return function (...args) {
    const now = new Date()
    if (now - pre > timer) {
      fn.apply(this, args)
      pre = now
    }
  }
}

// 防抖函数 一直触发不执行，停止触发后执行
const debounce = (fn, wait = 1000) => {
  let timer
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this. args)
    }, wait)
  }
}