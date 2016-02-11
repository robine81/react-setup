//REACT components
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	render(){
		return <Button>I React</Button>
	}
}

class Button extends React.Component {
	render(){
		return <button>{this.props.children}</button>
	}
}


export default App

const Heart = () => <span className=”glyphicon glyphicon-heart”> </span>