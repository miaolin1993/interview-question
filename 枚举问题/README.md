Object.defineProperty用法简介
第一个参数是要操作的对象ctx
第二个参数是要添加的属性sex
第三个参数是一个对象里面包含四个可选参数：
1. value 要赋予的值
2. enumerable 是否可枚举
3. writable 是否可修改
4. configurable 是否可配置，如被delete删除

```Object.defineProperty(ctx, "sex", {
  value: "男",
  //是否为枚举属性
  enumerable: false,
  writable: true, // 控制是否可以修改
  configurable: true, // 控制能否被delete删除
})```
