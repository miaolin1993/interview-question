// 题目里的数组
const versions = [ '1.45.0', '1.5', '6', '3.3.3.3.3.3.3']

// 也是需要比大小和排序
// 还是用快排，对比的部分自己手写
function quickSort(list) {
  const lens = list.length
  if (lens < 2) return list
  const base = list[0]
  const min = list.slice(1).filter(val => isLte(val, base)) // <=
  const max = list.slice(1).filter(val => isGt(val, base)) // >
  return quickSort(min).concat(base).concat(quickSort(max))
}

// 判断a是否小于等于b
function isLte(a, b) {
  if (!a.includes('.') && !b.includes('.')) {
    if (a <= b) return true
  }
  // 有小数点 取分割后数组，没有就取他自身
  const listA = a.split('.').length ? a.split('.') : [a]
  const listB = b.split('.').length ? b.split('.') : [b]

  let index = 0
  // 递归函数，持续判断数组每一项
  function compareList(a2, b2) {
    // a < b 直接返回结果
    if (+a2[index] < +b2[index]) return true
    // a或b的某一个已经达到数组最后一位，那么判断是否小于等于
    if (index === (a2.length - 1) || index === (b2.length - 1)) {
      // 需要转换成number进行对比 原因是数字5比45小，但字符串5比45大
      if (+a2[index] <= +b2[index]) return true
    }
    // 两者后续都有长度，那就继续对比
    if (a2[index] === b2[index]) {
      index++
      if (compareList(a2 ,b2)) return true
    }
  }
  if (compareList(listA, listB)) return true
  return false
}

// 判断a是否大于b
function isGt(a, b) {
  if (!a.includes('.') && !b.includes('.')) {
    if (a > b) return true
  }
  // 有小数点 取分割后数组，没有就取他自身
  const listA = a.split('.').length ? a.split('.') : [a]
  const listB = b.split('.').length ? b.split('.') : [b]

  let index = 0
  // 递归函数，持续判断数组每一项
  function compareList(a2, b2) {
    // a < b 直接返回结果
    if (+a2[index] > +b2[index]) return true
    // a或b的某一个已经达到数组最后一位，那么判断是否小于等于
    if (index === (a2.length - 1) || index === (b2.length - 1)) {
      if (+a2[index] > +b2[index]) return true
    }
    // 两者后续都有长度，那就继续对比
    if (a2[index] === b2[index]) {
      index++
      if (compareList(a2 ,b2)) return true
    }
  }
  if (compareList(listA, listB)) return true
  return false
}

console.log(quickSort(versions))

// 最终输出结果: [ '1.5', '1.45.0', '3.3.3.3.3.3.3', '6' ]
