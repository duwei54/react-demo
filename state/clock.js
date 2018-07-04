class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let {payload:todo} = this.props;
    return <h1>Hello, {this.state.date.toLocaleTimeString()}  {todo}</h1>;
  }
}