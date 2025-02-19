# 高阶函数

## 高阶函数

:::tip

高阶函数：如果一个函数满足下面任意一个，则是高阶函数

1. 若函数接收的参数是一个函数，那么就是高阶函数
2. 若调用之后返回值依然是一个函数，那么就是高阶函数

:::

常见高阶函数：`Promise`、`setTimeout`、`arr.map((item)=>{return ···})`

## 函数柯里化

函数柯里化：通过函数调用继续返回函数的方式，实现多次接受参数最后统一处理的函数编码形式

```javascript
class Login extends React.Component {
  // 初始化状态
  state = {
    username: "",
    password: ""
  }
  saveFormData = (dataType) => {
    return (event) => {
      this.setState({[dataType]: event.target.value})//将dataType转化为变量
      console.log(dataType, event.target.value);
    }
  }
  // 保存密码到状态中
  savePassword = (event) => {
    this.setState({password: event.target.value})
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">
          用户名：
          <input onChange={this.saveFormData('username')} type="text" name="username" id="username"/>
        </label>
        <label htmlFor="password">
          密码：
          <input onChange={this.saveFormData('password')} type="password" name="password" id="password"/>
        </label>
        <br/>
        <button style={{width: "470px", height: "36px"}}>Login</button>
      </form>)
  }
}

// 渲染组件
ReactDOM.render(<Login/>, document.querySelector('div'));
```

## 不用函数柯里化实现

```javascript title="不用函数柯里化"
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
        <label htmlFor="username">
          用户名：
          <input onChange={(event) => { this.saveFormData('username', event.target.value) }} type="text" name="username" id="username" />
        </label>
        <label htmlFor="password">
          密码：
          <input onChange={(event) =>{this.saveFormData('password', event.target.value) }} type="password" name="password" id="password" /><br/>
        </label>
        <button style={{ width: "470px", height: "36px" }}>Login</button>
      </form>
    )
  }
}
// 渲染组件
ReactDOM.render(<Login />, document.querySelector('div'));
```
