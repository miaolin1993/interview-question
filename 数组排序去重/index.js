const a = [ 1, 2, 3, 4, 5 ]
const b = [ 3, 4, 5, 6, 7 ]

function filters(a, b) {
  // 先找在a里不在b的，再找在b不在a的，两次处理后的结果就是不重复的
	const list = []
  a.forEach(val => {
    if (!b.includes(val)) list.push(val)
  })
  b.forEach(val => {
    if (!a.includes(val)) list.push(val)
  })

  console.log(list)
  return list
}


filters(a, b)
// 输出 [1,2,6,7]