import React, { Component } from 'react';
import { FaApple, FaAndroid} from 'react-icons/fa';


export class PlayStoreButton extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="playstore-btns">
				<a href="https://apps.apple.com/ru/app/%D0%BC%D0%B8%D1%80-16/id1391541605" className="primary-btn mr-sm-3">
					<span className="mr-10 d-inline-block ml-0">
						<FaApple/>
					</span>
					<h4>Available</h4>
					<p>on App Store</p>
				</a>
				<a href="https://play.google.com/store/apps/details?id=cloud.jelly.home.mir16&hl=ru" className="primary-btn">
					<span  className="mr-10 d-inline-block ml-0">
						<FaAndroid />
					</span>
					<h4>Download</h4>
					<p>from Play Store</p>
				</a>
			</div>
		);
	}
}
