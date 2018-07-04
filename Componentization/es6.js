class Clock2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.date.toLocaleTimeString()}</h1>;
  }
}