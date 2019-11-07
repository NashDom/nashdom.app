import React, { Component } from 'react';

class Error extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<main className="text-center">
				<div className="bg-dark pt-40 pb-40"></div>
				<div className="section-gap">
					<h1 className="mb-4">404</h1>
					<h2>Page Not Found</h2>
				</div>
			</main>
		);
	}
}

export default Error;
