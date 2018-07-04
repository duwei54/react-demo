class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.confirm = this.confirm.bind(this);
	}
	confirm(){
		if(this.props.callBack && typeof this.props.callBack === "function"){
			this.props.callBack(this.child.getDate());
		}
		this.props.toggle(false)
	}
	render() {
		return (
			<React.Fragment>
				<div className='dialog-bg'></div>
				<div className='dialog-main'>
					<div className='dialog-header'>{this.props.title}</div>
					<div className='dialog-content'>
						{ React.cloneElement(React.Children.only(this.props.children), {ref: (ref) => { this.child = ref }})}
					</div>
					<div className='dialog-footer'>
						<button type="button" onClick={this.confirm}>确定</button>
						<button type="button" onClick={()=>this.props.toggle(false)}>取消</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

class ModalButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			visible : false
		}
	}

	toggle(isShow){
		this.setState({
			visible : isShow
		});
	}

	render() {
		let visible = this.state.visible;
		return (
			<React.Fragment>
				<button type="button" onClick={this.toggle.bind(this,true)}>打开</button>
				{visible && <Modal toggle={this.toggle.bind(this)} title={this.props.title} callBack = {this.props.callBack}>{this.props.children}</Modal>}
			</React.Fragment>
		)
	}
}

class Test1 extends React.Component {
	constructor(props) {
	    super(props);
	    this.callBack = this.callBack.bind(this);
  	}

  	callBack(text){
		alert(text);
	}

	render(){
		return (
			<ModalButton callBack = {this.callBack} title={'测试表单1'}>
				<Content1 />
			</ModalButton>
		);
	}
}

class Test2 extends React.Component {
	constructor(props) {
	    super(props);
	    this.callBack = this.callBack.bind(this);
  	}

  	callBack(text){
		alert(text);
	}

	render(){
		return (
			<ModalButton callBack = {this.callBack} title={'测试表单2'}>
				<Content2 />
			</ModalButton>
		);
	}
}