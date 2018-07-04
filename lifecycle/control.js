class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isUnmount:false,text:'卸载'};
		this.unmountToggle = this.unmountToggle.bind(this);
	}

	unmountToggle(){
		let text = this.state.isUnmount ? '卸载' : '加载' ;
		this.setState({isUnmount:!this.state.isUnmount,text})
	}
	render() {
		return (
			<React.Fragment>
				<button type="button" onClick={this.unmountToggle}>{this.state.text}</button>
				<button type="button" onClick={()=>this.forceUpdate()}>更新</button>
				{!this.state.isUnmount && <Clock date = {new Date()} />}
			</React.Fragment>
		);
	}
}