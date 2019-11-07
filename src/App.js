import React, { Component } from 'react';
import './assets/scss/main.scss';

import Header from './component/Sections/Header';
import Footer from './component/Sections/Footer';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
}

export default App;
