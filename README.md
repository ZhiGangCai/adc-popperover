## popperover

简单的二次确认框

## 在线demo

[在线demo]({在线demo地址})

## 功能点

1.二次确认
2.点击操作按钮触发回调事件

## 使用

从npm安装ct-adc-popper

```
npm install ct-adc-popper --save
```
在代码中使用

```
import Vue from 'vue';
import Popper from 'ct-adc-popper';

Vue.use(Popper);

然后再组件中：
this.$pop({
		参数列表，见下方
	})
```

#### 参数列表

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ----
msg | 提示内容 | string | 确认删除吗？ |  |
placement | 位置 | string | left | top,right,bottom,left |
offset | 偏移量 | string | '10px 10px' |  |向触发节点（ref）的偏移量
btns | 按钮组 | array | [{name: '确定'}, {name: '取消'}] | |按钮组，可配置回调函数和class，如{name: '确定', callback: ()=>{ alert('操作成功！'), class: 'btn btn-primary'}} 

## 更新日志

[更新日志](https://github.com/ct-adc/adc-popperover/blob/master/CHANGELOG.md)

## 外部资源依赖列表

- popper.js ^1.12.9

