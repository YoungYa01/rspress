# 路由

## BrowserRouter与HashRouter

```javascript title="路由的引入"
//路由的范围
//引入
import {BrowserRouter, HashRouter} from 'react-router-dom';
<BrowserRouter>
		<app/>
<BrowserRouter/>

<HashRouter>
		<app/>
<HashRouter/>
```

[`Hashrouter`和`Browserrouter`的区别](#hashrouter和browserrouter的区别)

## 编写路由链接

```jsx title="路由链接"
//首先引入
import {Link, NavLink, Route} from "react-router-dom";
// 1.
<Link to="/about">About<Link/>
// 2.
<NavLink to="/home">Home</NavLink>
// NavLink可以添加activeClassName，然后增加style，动态点击效果，实现路由链接的高亮
// 可以对NavLink进行二次封装
// 可以传递标签体内容 children 获取标签体内容
```

## 注册路由

```javascript
<Route path="/about" component={About}/>
<Route path="/home" component={Home}/>
```

## Switch

```javascript
//switch组件可以提高注册路由的效率
<Switch>
		<Route path="/about" component={About}/>
		<Route path="/home" component={Home}/>
</Switch>
```

## 精准匹配与模糊匹配

一般情况下，默认是模糊匹配

当开启`exact=true`时，为精准匹配

```javascript
<Route exact={true} path="/home" component={Home}/>
<Route exact path="/home" component={Home} />       //简写
```

## Redirect重定向

```javascript
<Switch>
  <Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
  <Redirect to="/home"/>
</Switch>
//当其他注册路由都匹配不上时，选择重定向路由
```

## 向路由组件传递params参数

```javascript
//创建路由链接时携带参数
<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
//注册路由的时候声明接收参数
<Route path="/home/message/detail/:id/:title" component={Details}/>
```

**路由组件可以在自身的props.match.params里接收到相应的参数**

![image-20221226160225579](D:\notebook\React.assets\image-20221226160225579.png)

## 向路由组件传递search参数

```javascript
{/*search参数*/}
<Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>
{/*search的接收方式   无特殊要求*/}
<Route path="/home/message/detail/" component={Details}/>
```

**处理search参数**

```javascript
//首先引入qs处理urlencoded编码格式的字符串
import qs from 'qs'
const {search} = this.props.location;					//？key1=value1&key2=value2&key3=value3
const {id, title} = qs.parse(search.slice(1));
```

![image-20221226161641131](D:\notebook\React.assets\image-20221226161641131.png)

`querystring`已经被弃用，改为`qs`即可引用成功

![image-20221226163227609](D:\notebook\React.assets\image-20221226163227609.png)

## **向路由组件传递state参数**

```javascript
{/*state参数*/}
//注意不要拼错
<Link to={{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>
{/*state的接收方式，无特殊要求*/}
<Route path="/home/message/detail" component={Details}/>
```

**state传递参数的优点就是在URL中不会出现所传递的参数**

刷新不会丢失页面，因为浏览记录存在于history stack中

```javascript
//处理参数
const {id, title} = this.props.location.state || {};
```

![image-20221226202952601](D:\notebook\React.assets\image-20221226202952601.png)

## push与replace模式

```javascript
// 在路由中默认打开的是push模式
// 可以在创建路由标签的时候，通过replace改变它的模式
// replace就不会push到history  stack中
// 使用默认的push会在stack中
```

## 编程式路由导航

```javascript
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

**其余的创建路由链接，注册路由都要与之对应**

## withRouter的使用

```javascript
//这个样子暴露出一般组件Header
//就可以使一般组件Header具有路由组件的API
export default withRouter(Header);
```

## HashRouter和BrowserRouter的区别

1. 底层原理不同

- BrowserRouter使用的是H5的history API,不兼容IE9及以下版本
- HashRouter使用 的是URL的哈希值

3. url表现形式不一样

- BrowserRouter的路径中没有`#`
- HashRouter的路径中包含`#`

3. 刷新后对路由state参数的影响

- BrowserRouter没有任何影响,因为state保存在history对象中
- HashRouter刷新后会导致路由state参数的丢失

4. 备注:HashRouter可以用于解决一些路径错误相关的问题
