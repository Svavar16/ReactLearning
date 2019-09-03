import React, { Component } from 'react';
import LifycycleB from './LifecycleB';

class LifycycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Svavar'
		};
		console.log('LifecycleA constructur');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA derivedstatefromprops');
		return null;
	}

	componentDidMount() {
		console.log('lifecycleA componentDidMount');
	}

	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate() {
		console.log('LifecycleA getSnapshotbeforeupdate');
		return null;
	}

	componentDidUpdate() {
		console.log('LifecycleA component did update');
	}

	changeState = () => {
		this.setState({ name: 'codevolution' });
	};

	render() {
		console.log('lifecycleA render');
		return (
			<div>
				<div>LifycycleA</div>
				<button onClick={this.changeState}>Change State</button>
				<LifycycleB />
			</div>
		);
	}
}

export default LifycycleA;
