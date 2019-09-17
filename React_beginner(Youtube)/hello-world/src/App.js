import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import LifecycleA from './components/LifycycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Table />
			</div>
		);
	}
}

export default App;
