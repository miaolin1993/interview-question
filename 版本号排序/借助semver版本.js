// npm i semver

const semver = require('semver')

// 如果是需要判断版本号，可以使用现成的semver包去做，这3.3.3.3.3.3是不符合版本号规定的。。。
// 下面这个数组是符合版本号规定的
const versions = [ '1.45.0', 'v1.5.7', 'v0.2.1', 'v1.0.2', 'v2.1.5', '0.0.5']

// 思路就是需要比大小和排序
// 下面写了个快排算法，对比的部分用了semver  lte判断是否小于等于  gt判断是否大于
function quickSort(list) {
  const lens = list.length
  if (lens < 2) return list
  const base = list[0]
  const min = list.slice(1).filter(val => semver.lte(val, base)) // <=
  const max = list.slice(1).filter(val => semver.gt(val, base)) // >
  return quickSort(min).concat(base).concat(quickSort(max))
}

console.log(quickSort(versions))

// 最终输出结果: [ '0.0.5', 'v0.2.1', 'v1.0.2', '1.5.7', 'v1.45.0', 'v2.1.5' ]