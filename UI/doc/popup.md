## Popup

> 基于原生的popup组件

[demo](http://stephenlyao.github.io/FESpring/UI/dist/)

### Api

参数 | 类型 | 说明
-- | -- | --
container | string | 弹出框的class
title | string | 顶部的内容
content | string | 中间部分的内容
open | object | name指左边按钮的内容（一般为‘确定’）， handler是对应的执行函数
close | object | name指右边按钮的内容（一般为‘取消’）， handler是对应的执行函数
isFork | boolean | 是否显示右上角的叉
isDrag | boolean | 是否支持拖拽
isMask | boolean | 是否显示遮罩层
width | number | 弹出框的宽度
height | number | 弹出框的高度
skin | string | 主题颜色，有 blue/black/green/red/yellow


### Usage

```javascript
let popup = new Popup({
  container: 'popup',
  title: 'Popup UI Component',
  content: 'This a popup ui component, by stephenliu',
  open: {
    name: '确定',
    handler: function() { console.log('open popup!') }
  },
  close: {
    name: '取消',
    handler: function() { console.log('close popup!') }
  },
  isFork: true,
  isDrag: true,
  isMask: true,
  width: 400,
  height: 200,
  skin: 'blue'
})

popup.init()
```
