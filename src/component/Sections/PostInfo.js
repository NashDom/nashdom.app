import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PostInfoItem from '../SingleItem/PostInfoItem';
import postInfoList from '../../data/post-info';

class PostInfo extends Component {
	constructor(props) {
		super(props);
		this.state = postInfoList;
	}

	render() {
		const postInfoItems = this.state.postInfoList.map((item) => {
			return (
				<div key={item.id}>
					<img className="d-none" alt="" />
					<PostInfoItem imgUrl={item.imgUrl} post={item.post} date={item.date}/>
				</div>
			);
		});

		return (
			<section className="container-fluid">
				<div className="row">
					<div className="offset-lg-5 col-lg-7 post-slider-p-0">
						<div className="post-slider-area">
							<div className="row">
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
										centerSlidePercentage={33.33}
										infiniteLoop={true}
										transitionTime={2000}
										useKeyboardArrows={true}
									>
										{postInfoItems}
									</Carousel>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default PostInfo;
