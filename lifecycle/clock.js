class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date:props.date};
    console.log('1. constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('2. getDerivedStateFromProps');
    // 在组件实例化或接收到新的 props 时被触发若它的返回值是对象，则将被用于更新 state；若是 null ，则不触发 state 的更新
    // 配合 `componentDidUpdate` 使用，这一方法可以取代 `componentWillReceiveProps`
    return nextProps;
  }

  componentDidMount(){
    console.log('4. componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, prevState){
    console.log('6. shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('8. getSnapshotBeforeUpdate');
    // 该方法在实际改动（比如 DOM 更新）发生前的“瞬间”被调用，返回值将作为 `componentDidUpdate` 的第三个参数
    // 配合 `componentDidUpdate` 使用，这一方法可以取代 `componentWillUpdate`
    return null;
  }
  componentDidUpdate(props, state, snaptshot) {
    console.log('9. componentDidUpdate');
    //参数 snapshot 即是之前调用 getSnapshotBeforeUpdate 的返回值
  }

  componentWillUnmount(){
    console.log('10. componentWillUnmount');
  }

  componentDidCatch(error, info){
    //error 是被抛出的错误
    //info 是一个含有 componentStack 属性的对象。这一属性包含了错误期间关于组件的堆栈信息。
  }

  render() {
    console.log('3. render');
    return <h1>{this.state.date.toLocaleTimeString()}</h1>;
  }
}