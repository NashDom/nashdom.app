import React, { Component } from 'react';
import SectionTitle from '../Elements/SectionTitle';
import subscribeData from '../../data/subscribe';

class Subscribe extends Component {
	constructor(props) {
		super(props);
		this.state = subscribeData;
	}

	render() {
		return (
			<section className="section-gap-top relative newsletter-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-10">
							<div className="about-left-content">
								<SectionTitle title={this.state.title} text={this.state.text} />
								<div className="subscribe-form relative">
									<div id="mc_embed_signup">
										<form
											target="_blank"
											action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
											method="get"
											className="newsletter relative"
										>
											<input
												name="EMAIL"
												placeholder="Your email address"
												className="common-input"
												required=""
												type="email"
											/>
											<div className="d-none">
												<input
													name="b_36c4fd991d266f23781ded980_aefe40901a"
													tabIndex="-1"
													type="text"
												/>
											</div>
											<button className="primary-btn">
												START<span className="lnr lnr-arrow-right" />
											</button>
											<div className="info" />
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="about-right-content">
						<div className="overlay overlay-bg" />
					</div>
				</div>
			</section>
		);
	}
}

export default Subscribe;
