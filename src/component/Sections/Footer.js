import React, { Component } from 'react';
import { PlayStoreButton } from '../Elements/Button';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<footer className="footer-area">
				<div className="container">
					
					<div className="row">
						<div className="col-lg-12">
							<div className="footer-logo">
								<a href="index.html">
									<img src={require('../../assets/img/logo_black.png')} alt="" />
								</a>
							</div>
						</div>
					</div>
					<div className="row copyright-area relative">
						<div className="col-lg-6 col-md-4">
							<p className="copy-right-text">
								Copyright © 2019 Все права защищены <a href="/">ТМ НашДом</a>
							</p>
						</div>
						<div className="col-lg-6 col-md-8">
							<PlayStoreButton />
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
