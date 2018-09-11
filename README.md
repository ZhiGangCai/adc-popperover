## popperover

二次确认

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

参数 |  类型 | 默认值  | 描述 
--- |  --- | --- | ---- 
ref | object | - | 必须，附着的节点
msg |string | 确定操作吗？ | 提示内容 
placement |string | left | 位置，可选值：top,right,bottom,left 
offset |  string | '10px 10px' |  | 向附着节点（ref）的偏移量
yes | function | ()=>{} | 点击确定时触发的回调
isButton | Boolean | true    | 是否显示按钮                       |
cancel | function | ()=>{}  | 取消按钮点击事件 

## 更新日志

[更新日志](https://github.com/ct-adc/adc-popperover/blob/master/CHANGELOG.md)

## 外部资源依赖列表

- [popper.js](https://github.com/FezVrasta/popper.js) ^1.12.9

