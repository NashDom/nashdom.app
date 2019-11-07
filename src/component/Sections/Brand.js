import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import BrandItem from '../SingleItem/BrandItem';
import brandData from '../../data/brand';

class Brand extends Component {
	constructor(props) {
		super(props);
		this.state = brandData;
	}

	render() {
		const brandItems = this.state.brandList.map((item) => {
			return (
				<div key={item.id}>
					<img className="d-none" alt="" />
					<BrandItem imgUrl={item.imgUrl} />
				</div>
			);
		});

		return (
			<section className="brand-area section-gap-top">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-12">
							<Carousel
								showThumbs={false}
								showArrows={false}
								showStatus={false}
								showIndicators={false}
								autoPlay={true}
								interval={3000}
								swipeable={true}
								responsive={true}
								centerMode={true}
								centerSlidePercentage={20}
								infiniteLoop={false}
								transitionTime={2000}
								useKeyboardArrows={true}
							>
								{brandItems}
							</Carousel>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Brand;
