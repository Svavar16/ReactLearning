import React, { Component } from 'react';
import './App.css';
import PureComp from './components/PureComps';
import ParentComp from './components/ParentComp';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ParentComp />
			</div>
		);
	}
}

export default App;
