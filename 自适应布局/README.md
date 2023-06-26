## 一、CSS自适应布局

**已知**：

- 布局分为：⽗元素A和N个⼦元素B；

- A宽度不固定：最⼩宽度为1000px，内部边距是32px

- B的宽度不固定：相邻两个B元素的间距是16px，所有B的宽度相同，边框为1像素，颜⾊为999

- 每⾏只能有3个B元素，超过的话需要换⾏；

- 最左侧B元素和最右侧的B元素，距离A的边缘都是32px；



```
HTML
<div class="client-a">
<div class="client-b"></div>
<div class="client-b"></div>
<div class="client-b"></div>
<div class="client-b"></div>
<div class="client-b"></div>
...
</div>
<style>
// 写下你的代码
</style>
```

