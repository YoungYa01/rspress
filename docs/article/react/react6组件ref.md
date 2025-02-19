# 组件三大核心之一 `ref`

## refs与事件处理

组件内标签可以通过定义ref属性来标识自己

1. 字符串形式的ref

```jsx
<input ref="input1" />
```

2. 回调形式的ref

```jsx
<input ref={(currentNode)=>{this.input1 = currentNode}} />
```

> 此处的this指向的是当前组件

**关于回调 refs 的说明**

如果 `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 `DOM`
元素。这是因为在每次渲染时会创建一个新的函数实例，所以 `React` 清空旧的 `ref` 并且设置新的。通过将 `ref` 的回调函数定义成 `class`
的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

写成下面这种方式，就可以避免咯

这种方式就像是，通过点击事件，然后去调用组件自身的方法一样，就可以避免上面的问题咯

```jsx
<input ref={this.printNode} type="text" placeholder="请输入···" />
```

> JSX的注释

```jsx
{/*注释*/}
```

## createRef的使用

`React.createRef()`调用后可以返回一个容器该容器可以存储被`ref`所标识的节点，该容器是“专人专用”

```jsx
myRef = React.createRef();
```

## 事件源---event.target

通过event.target能获取到当前事件的事件源

eg:

```jsx
class Component extends React.PureComponent {
  showData = (evevnt) => {
    console.log(event.target);
  }
  
  render() {
    <input onBlur={this.showData} type="text" placeholder="失去焦点"/>
  }
}
```
