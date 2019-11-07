import React, { Component } from 'react';
import BlogBanner from '../Sections/BlogBanner';
import PostInfo from '../Sections/PostInfo';
import BlogPost from '../Sections/BlogPost';
import RecentPost from '../Sections/RecentPost';
import { FaFacebookF, FaArrowLeft, FaArrowRight, FaSearch, FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';

class BlogPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<main>
				<BlogBanner />
				<PostInfo />
				<div className="main-body section-gap mt--30">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-12 post-list">
								<BlogPost />
								<nav className="blog-pagination justify-content-center d-flex mt-30">
									<ul className="pagination">
										<li className="page-item">
											<a href="/blog-details" className="page-link" aria-label="Previous">
												<span aria-hidden="true">
													<FaArrowLeft />
												</span>
											</a>
										</li>
										<li className="page-item">
											<a href="/" className="page-link">01</a>
										</li>
										<li className="page-item active">
											<a href="/" className="page-link">02</a>
										</li>
										<li className="page-item">
											<a href="/" className="page-link">03</a>
										</li>
										<li className="page-item">
											<a href="/" className="page-link">04</a>
										</li>
										<li className="page-item">
											<a href="/" className="page-link">09</a>
										</li>
										<li className="page-item">
											<a href="/blog-details" className="page-link" aria-label="Next">
												<span aria-hidden="true">
													<FaArrowRight />
												</span>
											</a>
										</li>
									</ul>
								</nav>
							</div>

							<div className="col-lg-4 col-md-10 sidebar">
								<div className="single-widget search-widget">
									<form className="example" action="#">
										<input type="text" placeholder="Search Blog" required="" />
										<button type="submit" className="text-uppercase">
											search
											<FaSearch className="ml-15"/>
										</button>
									</form>
								</div>

								<div className="single-widget protfolio-widget">
									<h4 className="title"> <span></span> About Me</h4>
									<img className="img-fluid" src={require('../../assets/img/blog/author1.png')} alt="" />
									<div className="mt-25">
										<p>
											Enim ad minim veniam, quis nostrud exerc itation ullamco laboris enim ad minim veniam, quis nostrud
											exercitation ullamco laboris nisi ut aliquip
										</p>
									</div>
									<h5>
										<a href="/">Get Connected</a>
									</h5>
									<ul>
										<li><a href="/"><FaFacebookF /></a></li>
										<li><a href="/"><FaTwitter /></a></li>
										<li><a href="/"><FaDribbble /></a></li>
										<li><a href="/"><FaBehance /></a></li>
									</ul>
								</div>

								<RecentPost />

								<div className="single-widget category-widget">
									<h4 className="title"><span></span>Post Categories</h4>
									<ul>
										<li>
											<a href="/">
												Illustration<span> (11)</span>
											</a>
										</li>
										<li>
											<a href="/">
												Sports<span> (21)</span>
											</a>
										</li>
										<li>
											<a href="/">
												Design<span> (9)</span>
											</a>
										</li>
										<li>
											<a href="/">
												Social life<span> (15)</span>
											</a>
										</li>
										<li>
											<a href="/">
												Project<span> (10)</span>
											</a>
										</li>
									</ul>
								</div>

								<div className="single-widget tag-widget">
									<h4 className="title"><span></span>Tag Clouds</h4>
									<ul className="list">
										<li><a href="/">Funny</a></li>
										<li><a href="/">Project</a></li>
										<li><a href="/">Travel</a></li>
										<li><a href="/">Creative</a></li>
										<li><a href="/">Design</a></li>
										<li><a href="/">Personal</a></li>
									</ul>
								</div>

								<div className="single-widget newsletter-widget">
									<h4 className="title"><span></span>Subscribe</h4>
									<div id="mc_embed_signup">
										<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
											method="get" className="">
											<div className="form-group">
												<input name="EMAIL" placeholder="Email Address" required="" type="email" />
												<div className="d-none">
													<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" defaultValue="" type="text" />
												</div>
												<button className="primary-btn text-uppercase mt-15">Subscribe</button>
											</div>
											<div className="info"></div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default BlogPage;
