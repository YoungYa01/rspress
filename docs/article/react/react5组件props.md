# 组件三大核心之一 `props`

## props的使用

通过利用props从外部数据传递

所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

只读的

```javascript
class Person extends React.Component {
  render() {
    return (
      <ol>
        <li>姓名：{this.props.name}</li>
        <li>性别：{this.props.sex}</li>
        <li>年龄：{this.props.age}</li>
      </ol>
    )
  }
}

ReactDOM.render(<Person name="Tom" age="18" sex="男"/>, document.querySelectorAll('div')[0]);
ReactDOM.render(<Person name="Jerry" age="30" sex="女"/>, document.querySelectorAll('div')[1]);
ReactDOM.render(<Person name="Derry" age="60" sex="恐龙"/>, document.querySelectorAll('div')[2]);
```

```javascript
const p = {
  name: "YoungYa",
  age: "20",
  sex: "Boy"
};
ReactDom.render(<Person name={p.naem} age={p.age} sex={p.sex}/>);
```

## 批量传递props

利用...运算符

```javascript
const p = {
  name: "YoungYa", age: "20", sex: "Boy"
};
ReactDOM.render(<Person {...p}/>, document.getElementById('div'))
```

渲染的时候可以这样写

```javascript
const {name, sex, age} = this.props;
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

```javascript
class Person extends React.Component {

}

Person.proTypes = {
  name: React.PropTypes.string.isRequired,		//React 15版本之前
  age: PropTypes.number.isRequired,				//需要引入prop-types.js文件
  speak: Proptypes.func							//用func来限制function
}
```

方法二：在类中进行限制

```javascript
class Person extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropType.string,
    age: PropType.number,
    speak: ProType.func,
  }
}
```

## 设置props的默认值

```javascript
Person.defaultProps = {
  sex: 'Boy',
  age: 0,
}
```

类中设置默认值

```javascript
class Person extends React.Component {
  static defaultProps = {
    sex: 'Boy',
    age: 0,
  }
}
```
