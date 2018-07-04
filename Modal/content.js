class Content1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.handleChange = this.handleChange.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  handleChange(e){
  	this.setState({
  		text: e.target.value
  	})
  }

  getDate(){
    return this.state.text;
  }

  render() {
    return <input type="text" value={this.state.text} onChange={this.handleChange}/>
  }
}

class Content2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text1: "",text2: ""};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  handleChange1(e){
    this.setState({
      text1: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      text2: e.target.value
    })
  }

  getDate(){
    return this.state.text1  + '    '+  this.state.text2;
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.text1} onChange={this.handleChange1}/>
        <br/>
        <input type="text" value={this.state.text2} onChange={this.handleChange2}/>
      </React.Fragment>
    )
  }
}