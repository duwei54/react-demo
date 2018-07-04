let config = {
  width: '200px',
  no_results_text: '请选择一个城市'
}
class Chosen extends React.Component {

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.chosen(config);
  }


  componentWillUnmount() {
    this.$el.chosen('destroy');
  }

  render() {
    return (
      <div>
        <select ref={el => this.el = el} multiple={true}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

function Example() {
  let city = ['北京','上海','深圳','广州','昆明','长沙','成都'];
  let options = city.map((city,index)=> <option key={index}>{city}</option>);
  return (
    <Chosen>
    {options}
    </Chosen>
  );
}
