# React

## React使用五部曲

```html
    <!-- 创建一个容器 -->
<div class="react-continer"></div>
<!-- 引入react核心库 -->
<script src="../build/react.js"></script>
<!-- 引入react-dom  用于支持react操作DOM -->
<script src="../build/react-dom.js"></script>
<!-- 引入babel 用于将jsx转为js -->
<script src="../build/babel.js"></script>
<!-- React代码引入方式一 -->
<!-- jsx文件组件并使用 -->
<script type="text/babel">
  // 创建虚拟DOM
  const VDOM = <h1>Hello React</h1>
  // ReactDom.render(虚拟DOM，容器)
  React.render(VDOM, document.querySelector('.react-continer'));
</script>
<!-- 引入方式二 -->
<script src="../js/React01.jsx" type="text/babel"></script>
```

## 引入React相关文件

```html

<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
```

### 创建虚拟DOM

way.1

``` javascript
<script type="text/babel">
	// 创建虚拟DOM
	const VDOM = <h1>Hello React</h1>
	// ReactDom.render(虚拟DOM，容器)
	React.render(VDOM,document.querySelector('.react-continer'));
</script>
```

way.2

``` javascript
const VDOM = React.creatElement(标签名,标签属性,标签内容)
```

``` javascript title="jsx"
<script type="text/javascript">
      // 创建虚拟DOM
      const VDOM = React.creatElement('h1'，{id:'title'});
      // ReactDom.render(虚拟DOM，容器)
      ReactDOM.render(VDOM,document.querySelector('.react-continer'));
</script>
```

### 多层级DOM创建

way.1

``` javascript title="jsx"
//创建多层级的虚拟DOM
const VDOM2 = React.createElement('div', { id: 'ReactDiv1' },
React.createElement('h1', { id: 'ReactDiv2' }, 'Hello React 嵌套'));
```

way.2

``` javascript title="jsx"
const VDOM =(
	<h1 id="reactId1">
		<div id="reactId2">Hello React and JSX</div>
	</h1>
)
```

**JSX 其实就是原生JS的语法糖**

### 变量的使用

在jsx中可以定义一个变量,然后赋值,然后交给虚拟ＤＯＭ,用 {变量} 将变量包起来

```javascript title="jsx"
const myId = 'YYY';
const VDOM = (
  <h1 id={myId}>
    <p>
      这是一个层层title
    </p>
  </h1>
);
```

但是class就有点问题了

```javascript title="jsx"
const myId = 'YYY';
const VDOM = (
    <h1>
        <p class="title">
            这是一个层层title
        </p>
    </h1>
);
```

上述代码中的class会产生warning

![image-20221007230948128](D:\notebook\React.assets\image-20221007230948128.png)

**处理方法就是将class改成className**

```javascript title="jsx"
const myId = 'YYY';
const VDOM = (
    <h1 id={myId}>
        <p className="title">
            这是一个层层title
        </p>
    </h1>
);
```

搞定,目的就是为了**避免ES6的class**声明类的用法

### JSX中的内联样式表使用

```javascript title="jsx"
<div style={{backgroundColor:'black'}}></div>
```

注意点

1. 样式内容要写成对象的形式
2. 组合词的属性要用小驼峰来写
3. 属性的内容要用用引号引起来,否则就是使用变量
4. class要写成class Name，为了区分class类

==标签必须闭合==

```javascript title="jsx"
<input type="text" />		//结尾加一个反斜杠将其闭合
```

### React中标签的使用

1. 若是小写字母开头，则会判定去找html中对应的标签，若无则报错
2. 若是大写字母开头，则会去渲染对应的组件，若没有定义则报错

==使用js语法遍历数组，在jsx中的使用==

```javascript title="jsx"
const arr = ['JavaScript', 'CSS', 'HTML', 'React', 'Regular', 'Vue'];
const VDOM = (
	<div>
		<h1>前端学习</h1>
		<ul>
          {
			arr.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
	</div>
)
ReactDOM.render(VDOM, document.querySelector("div"));
```

## React面向组件编程

## 函数式组件

```javascript title="jsx"
<script type="text/babel">
	//创建函数式组件
	function Demo() {
	return <h2>我使用函数定义的组件(适合用于【简单组件】的定义)</h2>}
	ReactDOM.render(<Demo/>,document.querySelector(".test"))
</script>
```

React DOM.render()之后执行了解析组件标签，然后找到Demo组件，发现是函数式组件，随后调用该函数，将返回的虚拟DOM转为真实DOM并且呈现出来

函数式组件创建注意==函数名要首字母大写==，否则会被识别成html，浏览器报错

在react中无法打印this，因为babel编译后，开启了严格模式，打出来的this为undefined

## 类式组件

先回忆一下==类==是什么

```javascript title="jsx"
// 创建一个person类
class Person {
// 构造器方法
  constructor(name, age, ...c) {
    this.name = name;
    this.age = age;
    this.rest = c;
  }
  
  //一般方法
  speak() {
    console.log(`我叫${this.name},我的年龄是${this.age}。`)
  }
}

const p2 = new Person('Jerry', 22);
const p3 = new Person('Jerry', 22, "asds", 123);
p2.speak();
console.log(p3);
```

**再想想==继承、原型、原型链==**

```javascript title="jsx"
// 创建一个person类
class Person {
// 构造器方法
  constructor(name, age, ...c) {
    this.name = name;
    this.age = age;
    this.rest = c;
  }
  
  //一般方法
  speak() {
    console.log(`我叫${this.name},我的年龄是${this.age}。`)
  }
}

// class Student extends Person{
// 可以什么都不写，调用父类的构造器
// }
class Student extends Person {
//再添加自己独有的构造
  constructor(name, age, grade) {
    super(name, age);
    // 调用super方法，接受父类已有的构造器
    //super必须在最前面
    this.grade = grade;
  }
}

const S1 = new Student('xiaoMing', '20', '高三');
console.log(S1);
```

重写从父类继承来的方法

```javascript title="jsx"
class Student extends Person {
  //再添加自己独有的构造
  constructor(name, age, grade) {
    super(name, age);
    // 调用super方法，接受父类已有的构造器
    //super必须在最前面
    this.grade = grade;
  }
  
  speak() {
    //重写从父类继承来的方法
    console.log(`我叫${this.name},我的年龄是${this.age}，我正在读${this.grade}`)
  }
}
```

==现在开始写类式组件==

```javascript title="jsx"
class MyComponent extends React.Component {
	render(){
	// render 放在类的原型对象上，供实例使用。
	return <h2>我是用类定义的组件（适用于【复杂组件】的定义）</h2>
	}
}
ReactDOM.render(<MyComponent/>,document.querySelector("div"));
```

ReactDOM.render()的执行过程

React DOM.render()之后执行了解析组件标签，然后找到MyComponent组件，发现是类式组件，随后new出来该类的实例，并通过实例调用到原型上的render方法，将render返回的虚拟DOM转为真实DOM并且呈现出来

# 组件三大核心之一state

state是组件对象最重要的属性，值是对象，可以包含多个key-value的组合

组件被称为“状态机”，通过更新组件的state来更新对应的界面（重新渲染组件）

## 初始化state

```javascript title="jsx"
// 初始化组件
class Weather extends React.Component {
	constructor(props) {
	super(props);
	// 初始化状态
	this.state = { isHot: false };
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

注意点一：用bind解决this指向问题

```javascript title="jsx"
this.changeWeather = this.changeWeather.bind(this);
```

注意点二：用setState改变状态

```javascript title="jsx"
this.setState({isHot:!isHot});
//在设置state时候，要用对象的方式传进去，多个状态分别对应自己的值
```

注意点三：不可以直接更改

```javascript title="jsx"
const isHot = this.state.isHot;
// 严重注意，状态不可以直接更改
this.state.isHot = !isHot;//这是错的写法
```

render的更新是将原来的合并，不会将所有都覆盖

整个过程中constructor调用了一次

render调用了1+n次

changeWeather调用了点击次数次

## state的简写方式

初始化属性

```javascript title="jsx"
this.state = { isHot: false };
//将这行代码从constructor中拉出来即可
state = { isHot: false };
```

设置属性

```javascript title="jsx"
this.setState({isHot: !isHot})
```

构造方法

```javascript title="jsx"
changeWeather() {
	const isHot = this.state.isHot;
	this.setState({isHot:!isHot});
}
//上面构造方式改成
changeWeather = function(){
  const isHot = this.state.isHot;
	this.setState({isHot:!isHot});
}
//但是function有自身的this指向，暂时还是行不通
changeWeather = （）=> {
  const isHot = this.state.isHot;
	this.setState({isHot:!isHot});
}
```

改成箭头函数就可以了，因为箭头函数自身没有this的指向，它会向上一级寻找this，因此就找到了weather的实例对象

==以后自定义方法就使用赋值语句+箭头函数==

```javascript title="jsx"
//自定义方法
myFun = () => {	}
```

组件中render方法中的this为组件实例对象

组件自定义 的放大中this为undefined

---解决：

- 强制绑定this，通过函数对象的bind()
- 箭头函数

## props的使用

通过利用props从外部数据传递

所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

只读的

```javascript title="jsx"
class Person extends React.Component{
	render(){
	return 
    (<ol>
      <li>姓名：{this.props.name}</li>
      <li>性别：{this.props.sex}</li>
      <li>年龄：{this.props.age}</li>
    </ol>)
	}
}
ReactDOM.render(<Person name="Tom" age="18" sex="男"/>,document.querySelectorAll('div')[0]);
ReactDOM.render(<Person name="Jerry" age="30" sex="女"/>,document.querySelectorAll('div')[1]);
ReactDOM.render(<Person name="Derry" age="60" sex="恐龙"/>,document.querySelectorAll('div')[2]);
```

```javascript title="jsx"
const p = {name:"YoungYa",age:"20",sex:"Boy"};
ReactDom.render(<Person name={p.naem} age={p.age} sex={p.sex}/>);
```

## 批量传递props

利用...运算符

```javascript title="jsx"
const p = {name:"YoungYa",age:"20",sex:"Boy"};
ReactDOM.render(<Person {...p}/>,document.getElementById('div'))
```

渲染的时候可以这样写

```javascript title="jsx"
const {name,sex,age} = this.props;
return (
  <ul>
    <li>你的名字：{name}</li>
    <li>你的性别：{sex}</li>
    <li>你的年龄：{age}</li>
  </ul>
)
```

## 对props进行限制

方式一：在类外面进行限制

```javascript title="jsx"
class Person extends React.Component{

}
Person.proTypes = {
  name:React.PropTypes.string.isRequired,		//React 15版本之前
  age:PropTypes.number.isRequired					//需要引入prop-types.js文件
  speak:Proptypes.func											//用func来限制function
}
```

方法二：在类中进行限制

```javascript title="jsx"
class Person extends React.Component{
  static propTypes = {
    name:PropTypes.string.isRequired,
    sex:PropType.string,
    age:PropType.number,
    speak:ProType.func,
  }
}
```

## 设置props的默认值

```javascript title="jsx"
Person.defaultProps = {
	sex:'Boy',
  age:0,
}
```

类中设置默认值

```javascript title="jsx"
class Person extends React.Component{
  static defaultProps = {
		sex:'Boy',
  	age:0,
	}
}
```

## refs与事件处理

组件内标签可以通过定义ref属性来标识自己

1）.字符串形式的ref

```javascript title="jsx"
<input ref="input1" />
```

2).回调形式的ref

```javascript title="jsx"
<input ref={(currentNode)=>{this.input1 = currentNode}} />
```

==此处的this指向的是当前组件==

**关于回调 refs 的说明**

如果 `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 DOM
元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class
的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

写成下面这种方式，就可以避免咯

这种方式就像是，通过点击事件，然后去调用组件自身的方法一样，就可以避免上面的问题咯

``` javascript title="jsx"
<input ref={this.printNode} type="text" placeholder="请输入···" />
```

`JSX的注释`

```jsx
{/*注释*/
}
```

## createRef的使用

React.createRef()调用后可以返回一个容器该容器可以存储被ref所标识的节点，该容器是“专人专用”

```
myRef = React.createRef();
```

### 事件源---event.target

通过event.target能获取到当前事件的事件源

eg:

``` javascript title="jsx"
showData = (evevnt) => {
	console.log(event.target);
}
  <input onBlur={this.showData} type="text" placeholder="失去焦点" />
```

## 非受控式组件

非受控组件将数据存储在`DOM`中，而不是组件内，这比较类似于传统的`HTML`表单元素。

1. 非受控组件的值不受组件自身的`state`和`props`控制
2. 非受控组件使用`ref`从`DOM`中获取元素数据

``` javascript title="jsx"
class Login extends React.Component {
	handleSubmit = (e) => {
	e.preventDefault();//阻止提交
	const {username,password} = this
	console.log(`用户名是：${username.value}，密码是${password.value    }`);
}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="username">用户名：</label><input ref={c => this.username = c} type="text" name="username" id="username" />
				<label htmlFor="password">密码：</label><input ref={c => this.password = c} type="password" name="password" id="password" /><br />
				<button style={{ width: "470px", height: "36px" }}>Login</button>
			</form>)
		}
}
ReactDOM.render(<Login />, document.querySelector('div'));
```

## 受控式组件

1. 受控组件通过`props`获取其当前值，并通过回调函数(比如`onChange`)通知变化
2. 表单状态发生变化时，都会通知`React`，将状态交给`React`进行处理，比如可以使用`useState`存储
3. 受控组件中，组件渲染出的状态与它的`value`或`checked`属性相对应
4. 受控组件会更新`state`的流程

``` javascript title="jsx"
class Login extends React.Component {
	// 初始化状态
	state = {
		username: "",
		password: ""
	}
	// 表单提交的回调
	handleSubmit = (e) => {
		e.preventDefault();//阻止提交
		const {username,password} = this.state
		console.log(`username是${username}password是${password}`);
	}
	//保存用户名到状态中 
	saveUsername = (event) => {
		this.setState({ username: event.target.value })
	}
	// 保存密码到状态中
	savePassword = (event) => {
		this.setState({ password: event.target.value })
	}
render() {
	return (
		<form onSubmit={this.handleSubmit}>
			<label htmlFor="username">用户名：</label><input onChange={this.saveUsername} type="text" name="username" id="username" />
			<label htmlFor="password">密码：</label><input onChange={this.savePassword} type="password" name="password" id="password" /><br />
			<button style={{ width: "470px", height: "36px" }}>Login</button>
		</form>)
	}
}
// 渲染组件
ReactDOM.render(<Login />, document.querySelector('div'));
```

## 高阶函数

高阶函数：如果一个函数满足下面任意一个，则是高阶函数

1. 若函数接收的参数是一个函数，那么就是高阶函数
2. 若调用之后返回值依然是一个函数，那么就是高阶函数

​ 常见高阶函数：Promise、setTimeout、arr.map((item)=>{return ···})

## 函数柯里化

函数柯里化：通过函数调用继续返回函数的方式，实现多次接受参数最后统一处理的函数编码形式

``` javascript title="jsx"
class Login extends React.Component {
	// 初始化状态
	state = {
		username: "",
		password: ""
	}
	saveFormData = (dataType) => {
		return (event) => {
			this.setState({ [dataType]: event.target.value })//将dataType转化为变量
			console.log(dataType, event.target.value);
		}
	}
	// 保存密码到状态中
	savePassword = (event) => {
		this.setState({ password: event.target.value })
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="username">用户名：</label><input onChange=	{this.saveFormData('username')} type="text" name="username" id="username" />
				<label htmlFor="password">密码：</label><input onChange={this.saveFormData('password')} type="password" name="password" id="password" /><br />
				<button style={{ width: "470px", height: "36px" }}>Login</button>
			</form>)
			}
	}
// 渲染组件
ReactDOM.render(<Login />, document.querySelector('div'));
```

## 不用函数柯里化实现

``` javascript title="jsx"
class Login extends React.Component {
// 初始化状态
	state = {
		username: "",
		password: ""
	}
	saveFormData = (dataType, value) => {
		this.setState({ [dataType]: value })//将dataType转化为变量
		console.log(dataType, value);
	}
	// 保存密码到状态中
	savePassword = (event) => {
		this.setState({ password: event.target.value })
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="username">用户名：</label><input onChange={(event) => { this.saveFormData('username', event.target.value) }} type="text" name="username" id="username" />
				<label htmlFor="password">密码：</label><input onChange={(event) =>{this.saveFormData('password', event.target.value) }} type="password" name="password" id="password" /><br/>
				<button style={{ width: "470px", height: "36px" }}>Login</button>
			</form>)
	}
}
// 渲染组件
ReactDOM.render(<Login />, document.querySelector('div'));
```

## 挂载

当组件第一次被渲染到 DOM
中的时候，就为其[设置一个计时器](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)。这在 React
中被称为“挂载（mount）”

## 卸载

当 DOM 中组件被删除的时候，应该[清除计时器](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval)
。这在 React 中被称为“卸载（unmount）”

## 生命周期

旧版的图

<img src="D:\notebook\React.assets\image-20221023152012370.png" alt="image-20221023152012370" style="zoom:150%;" />

### 引出

``` javascript title="jsx"
class Life extends React.Component {
	state = { opacity: .1 }
		death = () => {
		ReactDOM.unmountComponentAtNode(document.getElementsByTagName('div')[0]);
	}
	componentDidMount() {
		setInterval(() => {
			let { opacity } = this.state;
			opacity -= 0.1;
			if (opacity <= 0) {
				opacity = 1;
			}
			this.setState({ opacity: opacity });
			console.log("指数增长！");
		}, 200);
	}
	render() {
		return (
		<div>
			<h1 style={{ opacity: this.state.opacity }}>Study React</h1>
			<button onClick={this.death}>Delete</button>
		</div>)
	}
}
ReactDOM.render(<Life />, document.getElementsByTagName('div')[0]);
```

上面引出里第一个生命周期钩子--componentDidMount( )

### 组件挂载完毕的钩子

``` javascript title="jsx"
componentDidMount(){
	//当组件挂载完毕时调用这个
}
```

`componentDidMount()` 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。

这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 `componentWillUnmount()` 里取消订阅

你可以在 `componentDidMount()` 里**直接调用 `setState()`**
。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 `render()`
两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 `constructor()` 中初始化
state。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理

### 组件将要挂载的钩子

``` javascript title="jsx"
componentWillMount(){
	//当组件挂载前的时候调用
}
```

### 组件将要卸载的钩子

``` javascript title="jsx"
componentWillUnmount(){
	//当组件将要被卸载的时候调用
}
```

`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除
timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等。

`componentWillUnmount()` 中**不应调用 `setState()`**，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。

### 卸载组件

``` javascript title="jsx"
ReactDOM.unmountComponentAtNode()
```

![react生命周期(旧)](D:\notebook\React.assets\react生命周期(旧).png)

![image-20221023154715014](D:\notebook\React.assets\image-20221023154715014.png)

## 路由

### BrowserRouter与HashRouter

``` javascript title="jsx"
//路由的范围
//引入
import {BrowserRouter，HashRouter} from 'react-router-dom'
<BrowserRouter>
		<app/>
<BrowserRouter/>

<HashRouter>
		<app/>
<HashRouter/>
```

[转区别](###HashRouter和BrowserRouter的区别)

### **编写路由链接**

``` javascript title="jsx"
//首先引入
import {Link, NavLink, Route} from "react-router-dom"
//1.
<Link to="/about">About<Link/>
//2.
<NavLink to="/home">Home</NavLink>
//NavLink可以添加activeClassName，然后增加style，动态点击效果，实现路由链接的高亮
//可以对NavLink进行二次封装
//可以传递标签体内容		children获取标签体内容
```

### 注册路由

``` javascript title="jsx"
<Route path="/about" component={About}/>
<Route path="/home" component={Home}/>
```

### Switch

``` javascript title="jsx"
//switch组件可以提高注册路由的效率
<Switch>
		<Route path="/about" component={About}/>
		<Route path="/home" component={Home}/>
</Switch>
```

### 精准匹配与模糊匹配

一般情况下，默认是模糊匹配

当开启==exact=true==时，为精准匹配

``` javascript title="jsx"
<Route exact={true} path="/home" component={Home}/>
<Route exact path="/home" component={Home} />						//简写
```

### Redirect重定向

``` javascript title="jsx"
<Switch>
		<Route path="/about" component={About}/>
		<Route path="/home" component={Home}/>
		<Redirect to="/home"/>
</Switch>
//当其他注册路由都匹配不上时，选择重定向路由
```

### 向路由组件传递params参数

``` javascript title="jsx"
//创建路由链接时携带参数
<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
//注册路由的时候声明接收参数
<Route path="/home/message/detail/:id/:title" component={Details}/>
```

**路由组件可以在自身的props.match.params里接收到相应的参数**

![image-20221226160225579](D:\notebook\React.assets\image-20221226160225579.png)

### 向路由组件传递search参数

``` javascript title="jsx"
{/*search参数*/}
<Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>
{/*search的接收方式   无特殊要求*/}
<Route path="/home/message/detail/" component={Details}/>
```

**处理search参数**

``` javascript title="jsx"
//首先引入qs处理urlencoded编码格式的字符串
import qs from 'qs'
const {search} = this.props.location;					//？key1=value1&key2=value2&key3=value3
const {id, title} = qs.parse(search.slice(1));
```

![image-20221226161641131](D:\notebook\React.assets\image-20221226161641131.png)

==querystring==已经被弃用，改为==qs==即可引用成功

![image-20221226163227609](D:\notebook\React.assets\image-20221226163227609.png)

### **向路由组件传递state参数**

``` javascript title="jsx"
{/*state参数*/}
//注意不要拼错
<Link to={{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>
{/*state的接收方式，无特殊要求*/}
<Route path="/home/message/detail" component={Details}/>
```

**state传递参数的优点就是在URL中不会出现所传递的参数**

刷新不会丢失页面，因为浏览记录存在于history stack中

``` javascript title="jsx"
//处理参数
const {id, title} = this.props.location.state || {};
```

![image-20221226202952601](D:\notebook\React.assets\image-20221226202952601.png)

### push与replace模式

``` javascript title="jsx"
在路由中默认打开的是push模式
可以在创建路由标签的时候，通过replace改变它的模式
replace就不会push到history  stack中
使用默认的push会在stack中
```

### 编程式路由导航

``` javascript title="jsx"
//params式参数传递
this.props.history.replace(`/home/message/details/${id}/${title}`);
this.props.history.push(`/home/message/details/${id}/${title}`);

//search式参数传递
this.props.history.replace(`/home/message/details？id=${id}&title=${title}`);
this.props.history.push(`/home/message/details？id=${id}&title=${title}`);

//state式传递参数
this.props.history.replace(`/home/message/details`，{id,title});
this.props.history.push(`/home/message/details`，{id,title});
```

**==其余的创建路由链接，注册路由都要与之对应==**

### withRouter的使用

``` javascript title="jsx"
//这个样子暴露出一般组件Header
//就可以使一般组件Header具有路由组件的API
export default withRouter(Header);
```

### HashRouter和BrowserRouter的区别

> 1.底层原理不同
>
> ​ BrowserRouter使用的是H5的history API,不兼容IE9及以下版本,HashRouter使用 的是URL的哈希值
>
> 2.url表现形式不一样
>
> ​ BrowserRouter的路径中没有#
>
> ​ HashRouter的路径中包含#
>
> 3.刷新后对路由state参数的影响
>
> ​        (1).BrowserRouter没有任何影响,因为state保存在history对象中
>
> ​        (2).HashRouter刷新后会导致路由state参数的丢失
>
> 4.备注:HashRouter可以用于解决一些路径错误相关的问题

