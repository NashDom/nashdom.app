import React, { Component } from 'react';

class BlogDetailsBanner extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section className="blog-single-banner-area">
				<div className="container">
					<div className="row fullscreen-height d-flex align-items-end">
						<div className="blog-banner-content col-lg-8">
							<h1>
								Technology is Improving
								Dining out Experience
					</h1>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default BlogDetailsBanner;
