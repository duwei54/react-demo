const DateContext = React.createContext();
class Timer extends React.Component {
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

  render(){
    return (
      <DateContext.Provider value={this.state.date}>
        <Clock />
      </DateContext.Provider>
    );
  }
}

function Clock(props) {
    return (
      <React.Fragment>
      {
        <h1>Hello! <TimeFormat /></h1>
      }
      </React.Fragment>
    )
}


function TimeFormat(props) {
    return (
      <DateContext.Consumer>
        { date => (
            <span>{date.toLocaleTimeString()}</span>
          )
        }
      </DateContext.Consumer>
    );
}