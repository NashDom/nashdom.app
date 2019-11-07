import React, { Component } from 'react';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

class BlogBanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	render() {
		return (
			<section className="blog-banner-area">
				<div className="container">
					<div className="row fullscreen d-flex align-items-center justify-content-center">
						<div className="blog-banner-content text-center col-lg-8">
							<h1>
								An Intelligent App
								Can Understand your Thoughts
							</h1>
							<p>
								If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see
								some for as low as each.
							</p>
							<div className="video-popup d-flex align-items-center justify-content-center mt-25">
								<button onClick={this.openModal} className="play-video video-play-button animate">
									<span />
								</button>
								<span className="watch text-uppercase">Watch intro video</span>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<ModalVideo
							channel="youtube"
							isOpen={this.state.isOpen}
							videoId="KUln2DXU5VE"
							onClose={() => this.setState({ isOpen: false })}
						/>
					</div>
				</div>
			</section>
		);
	}
}

export default BlogBanner;
