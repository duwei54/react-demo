setInterval(()=>{
	ReactDOM.render(
		<div>
		<Clock1 date={ new Date()}/>
		<Clock2 date={ new Date()}/>
		</div>,
		document.getElementById('root')
		);
}, 1000);
