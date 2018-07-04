function withTimer(WrappedComponent){
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};

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

    render(){
      return <WrappedComponent {...this.props} date={this.state.date}/>
    }
  }
}


class BeiJingTime extends React.Component {
  render(){
    return  <h1>北京时间:{this.props.date.toLocaleTimeString()}</h1>;
  }
}

function NewYorkTime(props) {
  let newDate = props.date;
  newDate.setHours(newDate.getHours() - 13);
  return <h1>纽约时间:{newDate.toLocaleTimeString()}</h1>;
}