class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  render() {
    let random = Math.floor(Math.random()*10+1);
    if (random % 2 === 1){
      throw new Error('异常测试!');
    }
    return <h1>Hello, {this.state.date.toLocaleTimeString()}</h1>;
  }
}