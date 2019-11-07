import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import SectionTitle from '../Elements/SectionTitle';
import TestimonialItem from '../SingleItem/TestimonialItem';
import testimonialData from '../../data/testimonial';

class Testimonial extends Component {
	constructor(props) {
		super(props);
		this.state = testimonialData;
	}

	render() {
		const testimonialItems = this.state.testimonialList.map((item) => {
			return (
				<TestimonialItem
					key={item.id}
					imgUrl={item.imgUrl}
					name={item.name}
					designation={item.designation}
					speech={item.speech}
				/>
			);
		});
		return (
			<section className="testimonial-area section-bg" id="client">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 text-center">
							<SectionTitle title={this.state.title} text={this.state.text} />
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="active-testimonial">
								<Carousel
									showThumbs={false}
									showArrows={true}
									showStatus={false}
									showIndicators={false}
									autoPlay={true}
									interval={4000}
									swipeable={true}
									centerMode={true}
									centerSlidePercentage={50}
									infiniteLoop={true}
									transitionTime={2000}
									useKeyboardArrows={true}
								>
									{testimonialItems}
								</Carousel>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Testimonial;
