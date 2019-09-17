import React, { Component, PureComponent } from 'react';
import RegularComp from './RegularComp';
import PureComps from './PureComps';

class ParentComp extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Svavar'
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Svavar'
			});
		}, 2000);
	}

	render() {
		console.log('Parent component render');
		return (
			<div>
				Parent Component
				<RegularComp name={this.state.name} />
				<PureComps name={this.state.name} />
			</div>
		);
	}
}

export default ParentComp;
