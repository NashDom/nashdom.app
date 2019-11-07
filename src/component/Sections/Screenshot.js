import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import SectionTitle from '../Elements/SectionTitle';
import screenshotData from '../../data/screenshot';

class Screenshot extends Component {
	constructor(props) {
		super(props);
		this.state = screenshotData;
	}

	render() {
		return (
			<section className="screenshots-area relative">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="about-left-content">
								<SectionTitle title={this.state.title} text={this.state.text} />
							</div>
						</div>
						<div className="col-lg-7">
							<div className="right-side-content owl-carousel relative">
								<div className="screenshots-carousel">
									<Carousel
										showThumbs={false}
										showArrows={true}
										showStatus={false}
										showIndicators={false}
										autoPlay={true}
										interval={3000}
										swipeable={true}
										infiniteLoop={true}
										transitionTime={2000}
										useKeyboardArrows={true}
									>
										<div className="single-screenshots">
											<img className="img-fluid img-box-shadow" src={require('../../assets/img/iphone2.png')} alt="" />
										</div>
										<div className="single-screenshots">
											<img className="img-fluid img-box-shadow" src={require('../../assets/img/iphone2.png')} alt="" />
										</div>
									</Carousel>
								</div>
							</div>
						</div>
					</div>
					<div className="animate" data-animate="fadeIn" data-duration=".9s" data-delay="0s">
						<img className="screenshots-bg" src={require('../../assets/img/rounds2.png')} alt="" />
					</div>
				</div>
			</section>
		);
	}
}

export default Screenshot;
