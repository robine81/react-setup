//REACT components
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		this.state = {val: 0};
		this.update = this.update.bind(this);
	}
	update(){
		console.log('update')
		this.setState({val: this.state.val+1})
	}
	compontentWillMount(){
		console.log('mounting')
	}
	render(){
		console.log('rendering!')
		return <button onClick={this.update}>{this.state.val}</button>
	}
	compontentDidlMount(){
		console.log('rendered')
	}
	compontentUnMount(){
		console.log('bye!')
	}
}

export default App