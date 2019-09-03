import React, { Component } from 'react';

class LifycycleB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Svavar'
		};
		console.log('LifecycleB constructur');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleB derivedstatefromprops');
		return null;
	}

	componentDidMount() {
		console.log('lifecycleB componentDidMount');
	}

	shouldComponentUpdate() {
		console.log('LifecycleB shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate() {
		console.log('LifecycleB getSnapshotbeforeupdate');
		return null;
	}

	componentDidUpdate() {
		console.log('LifecycleB component did update');
	}

	render() {
		console.log('lifecycleB render');
		return <div>LifycycleB</div>;
	}
}

export default LifycycleB;
