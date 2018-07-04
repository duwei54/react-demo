class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.getDate = this.getDate.bind(this);
  }
  componentDidMount(){
    this.interval = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  getDate(){
    return this.state.date;
  }
  render(){
    return <h1>Hello, {this.state.date.toLocaleTimeString()}</h1>;
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.textInput1 = React.createRef();
    this.textInput2 = null;
    this.clock = null;
    this.focusTextInput1 = this.focusTextInput1.bind(this);
    this.focusTextInput2 = this.focusTextInput2.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  focusTextInput1() {
    this.textInput1.current.focus();
  }
  focusTextInput2() {
    this.textInput2.focus();
  }
  getDate(){
    let date = this.clock.getDate();
    alert(date.toLocaleTimeString());
  }
  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input type="text" ref={this.textInput1} />
        <button onClick={this.focusTextInput1}>获取焦点</button>
        <br/>
        <input type="text" ref={ input => this.textInput2 = input} />
        <button onClick={this.focusTextInput2}>获取焦点</button>
        <Clock ref = { clock => this.clock = clock} />
        <button onClick={this.getDate}>获取日期</button>
      </div>
    );
  }
}
