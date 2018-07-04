const BeiJing = withTimer(BeiJingTime)
const NewYork = withTimer(NewYorkTime)
ReactDOM.render(
		<div>
			<BeiJing />
			<NewYork />
		</div>,
		document.getElementById('root')
		);
