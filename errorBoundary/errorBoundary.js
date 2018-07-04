class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log('error============'+error.stack);
    console.log('info============'+info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h1>发生错误了</h1>;
    }
    return this.props.children;
  }
}