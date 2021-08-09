function Person() {
  this.name = "miaolin"
}
let ctx = new Person()
// defineProperty添加的属性默认就是不可枚举的
Object.defineProperty(ctx, "sex", {
  value: "男",
  //是否为枚举属性
  enumerable: false,
  writable: true, // 控制是否可以修改
  configurable: true, // 控制能否被delete删除
})
Object.getOwnPropertyNames(ctx).forEach(val => {
  console.log(`修改前: ${val}: ${ctx[val]}`)
  ctx[val] = '修改后的值'
  console.log(`修改后的值: ${val}: ${ctx[val]}`)
})

// 修改前: name: miaolin
// 修改后的值: name: 修改后的值
// 修改前: sex: 男
// 修改后的值: sex: 修改后的值