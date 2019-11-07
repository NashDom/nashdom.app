import React, { Component } from 'react';
import SectionTitle from '../Elements/SectionTitle';
import { PlayStoreButton } from '../Elements/Button';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import aboutData from '../../data/about';
import BackgroundImage from '../../assets/img/video-bg.jpg';

var aboutRightBg = {
	background: "url(" + BackgroundImage + ") no-repeat center",
	backgroundSize: "cover"
}

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aboutData,
			isOpen: false
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	render() {
		return (
			<section className="about-area relative" id="about">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7">
							<div className="about-left-content">
								<SectionTitle title={this.state.aboutData.title} text={this.state.aboutData.text} />
								<PlayStoreButton />
							</div>
						</div>
					</div>
					<div className="about-right-content" style={ aboutRightBg }>
						<div className="overlay overlay-bg" />
						<div className="video-popup align-items-center justify-content-center">
							<div>
								<button onClick={this.openModal} className="play-video video-play-button animate">
									<span />
								</button>
							</div>
							<p className="watch text-uppercase">Watch Demo Tutorial</p>
						</div>
					</div>

					<ModalVideo
						channel="youtube"
						isOpen={this.state.isOpen}
						videoId="KUln2DXU5VE"
						onClose={() => this.setState({ isOpen: false })}
					/>
				</div>
			</section>
		);
	}
}

export default About;
