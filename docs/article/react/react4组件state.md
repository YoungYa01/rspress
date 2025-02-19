# 组件三大核心之一state

`state`是组件对象最重要的属性，值是对象，可以包含多个`key`-`value`的组合

组件被称为“状态机”，通过更新组件的`state`来更新对应的界面（重新渲染组件）

## 初始化state

```javascript title="初始化组件"
// 初始化组件
class Weather extends React.Component {
  constructor(props) {
    super(props);
	// 初始化状态
	this.state = {
      isHot: false
    };
	// 解决changeWeather中this指向问题
	this.changeWeather = this.changeWeather.bind(this);
  }
  render() {
	// 读取状态
	const {isHot} = this.state;//用解构赋值的方式将状态读取出来
	return <h1 onClick = {this.changeWeather}>今天天气{isHot ? '炎热' : '凉爽'}</h1>
  }
  changeWeather() {
	// const isHot = this.state.isHot;
	// // 严重注意，状态不可以直接更改
	// this.state.isHot = !isHot;//这是错的写法
	const isHot = this.state.isHot;
	this.setState({isHot:!isHot});
	console.log(this.state.isHot);
  }
}
ReactDOM.render(<Weather />, document.querySelector("div"));
```

注意点一：用`bind`解决`this`指向问题

```javascript
this.changeWeather = this.changeWeather.bind(this);
```

注意点二：用`setState`改变状态

```javascript
this.setState({
  isHot: !isHot
});
//在设置state时候，要用对象的方式传进去，多个状态分别对应自己的值
```

注意点三：不可以直接更改

```javascript
const isHot = this.state.isHot;
// 严重注意，状态不可以直接更改
this.state.isHot = !isHot;//这是错的写法
```

`render`的更新是将原来的合并，不会将所有都覆盖

整个过程中`constructor`调用了一次

`render`调用了`1+n`次

`changeWeather`调用了点击次数次

## `state`的简写方式

初始化属性

```javascript
this.state = { isHot: false };
//将这行代码从constructor中拉出来即可
state = { isHot: false };
```

设置属性

```javascript
this.setState({isHot: !isHot})
```

构造方法

```jsx
class Component extends React.Component {
  changeWeather() {
    const isHot = this.state.isHot;
    this.setState({isHot:!isHot});
  }
  //上面构造方式改成
  changeWeather2 = function(){
    const isHot = this.state.isHot;
    this.setState({isHot:!isHot});
  }
  //但是function有自身的this指向，暂时还是行不通
  changeWeather3 = () => {
    const isHot = this.state.isHot;
    this.setState({isHot:!isHot});
  }
}
```

改成箭头函数就可以了，因为箭头函数自身没有`this`的指向，它会向上一级寻找`this`，因此就找到了`weather`的实例对象

**以后自定义方法就使用赋值语句+箭头函数**

```javascript
//自定义方法
myFun = () => {	}
```

组件中`render`方法中的`this`为组件实例对象

组件自定义 的放大中`this`为`undefined`

---解决：

- 强制绑定this，通过函数对象的bind()
- 箭头函数
