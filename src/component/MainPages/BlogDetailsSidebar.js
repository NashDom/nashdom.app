import React, { Component } from 'react';
import BlogDetailsBanner from '../Sections/BlogDetailsBanner';
import RecentPost from '../Sections/RecentPost';
import { FaFacebookF, FaTwitter, FaEnvelope, FaHeart, FaGooglePlusG, FaSearch, FaDribbble, FaBehance } from 'react-icons/fa';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<main>
				<BlogDetailsBanner />
				<div className="main-body section-gap">
					<div className="container-fluid">
						<div className="author-meta-info">
							<div className="author-details">

								<div className="row">
									<div className="col-lg-12">
										<h4 className="mb-30">Share</h4>
										<p className="user-name">
											<FaFacebookF className="mr-15" />
											<a href="/">Facebook</a>
										</p>
										<p className="date">
											<FaTwitter className="mr-15" />
											<a href="/">Twitter</a>
										</p>
										<p className="view">
											<FaEnvelope className="mr-15" />
											<a href="/">E-mail</a>
										</p>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-12 post-list">
								<div className="single-post row">
									<div className="col-lg-12">
										<p>
											Penny well naff Jeffrey no biggie arse cras me old mucke the Charles young delinquent nice one chi pt the full
											monty burk super Harry the little rotter lurgy don't get shirty with monty burk super Harry the little
											rotterJeffrey no biggie arse cras me old mucke the Charles young delinquent nice one chimney pot the full monty
											burk super Harry the little rotter lurgy don't get shirty with me tomfo olery. stuffed mate squiffy lavatory
											bloke arse over tit bog vagabond matie boy what a plonker spend a penny Jeffrey on your bike mate cuppa the
											bee's knees knees up ars
										</p>
										<p>
											Aiffing happy days James Bond chancer barney brown bre penny in well naff Jeffrey no biggie arse cras me old
											mucke the Charles young delinquent nice one. Bond chancer barney brown bre penny in well naff Jeffrey
										</p>
										<div className="post">
											<h4 className="mb-15">Island Resort</h4>
											<p>
												Burke super Harry the little rotter lurgy don't get shirty with me tomfoolery porki the little plo nker
												rotter stuffed mate squiffy lavatory bloke arse over tit bog vaga bond matie boy what a spend a penny Jeffrey
												on your bike mate cuppa the bee's knees knees up.
											</p>
											<p>
												Burke super Harry the little rotter lurgy don't get shirty with me tomfoolery porki the little plo nker rotter
												stuffed mate squiffy lavatory bloke arse over
											</p>
										</div>
									</div>
									<div className="offset-lg-3"></div>
									<div className="offset-lg-1 col-lg-10">
										<div className="pt-30">
											<img className="img-fluid" src={require('../../assets/img/blog/blog-details1.jpg')} alt="" />
										</div>
									</div>
									<div className="col-lg-8">
										<div className="post">
											<h4 className="mb-15">Interior Design</h4>
											<p>
												Burke super Harry the little rotter lurgy don't get shirty with me tomfoolery porkies the little rotter lurgy
												with me.stuffed mate squiffy lavatory bloke arse over tit bog vagabond matie a boy what a plonker spend a
												penny Jeffrey on your bike mate cuppa the bee's knees knees arse cockup James Bond gosh cack wellies pukka.
												stuffed mate squiffy lavatory bloke arse over tit bog vagabond matie boy what a plonker spend a penny Jeffrey
												on your bike mate cuppa the bee's knees.
											</p>
											<p>
												Burke super Harry the little rotter lurgy don't get shirty with me tomfoolery porkies the little rotter lurgy
												with me.stuffed mate squiffy lavatory bloke arse over tit bog vagabond matie a boy what a plonker spend a
												penny Jeffrey on your bike mate cuppa the bee's knees knees arse cockup James Bond.
											</p>
										</div>
									</div>

									<div className="offset-lg-1 col-lg-10">
										<div className="pt-30">
											<img className="img-fluid" src={require('../../assets/img/blog/blog-details1.jpg')} alt="" />
										</div>
									</div>
									<div className="col-lg-8">
										<div className="post">
											<h4 className="mb-15">Travel Tips</h4>
											<p>
												Harry the little rotter lurgy don't get shirty with monty burk super Harry the little rotterJeffrey no biggie
												arse cras me old mucke the Charles young delinquent nice one chimney pot full monty burk super Harry the
												little rotter lurgy don't get shirty no biggie arse cras me old mate squiffy lavatory bloke arse over tit bog
												vagabond matie boy what a plonker spend a penny Jeffrey on your bike mate cuppa the bee's knees knees up ars
												no biggie arse cras me old urgy don't get shirty no biggie arse cras me old mate squiffy lavatory bloke arse
												over tit bog vagabond matie boy what a plonker spend a penny
										</p>
										</div>
									</div>

									<div className="col-lg-10">
										<div className="details-tags mt-30 mb-50">
											<div className="row align-items-center">
												<div className="col-lg-4 col-md-7">
													<span className="tag-head">Tags: </span>
													<a href="/">app</a>,
													<a href="/">technology</a>,
													<a href="/">news</a>
												</div>
												<div className="offset-lg-3 col-lg-5 col-md-5">
													<div className="blog-details-social">
														<a href="/" className="icon-number">
															<FaHeart className="mr-10" />
															25
														</a>
														<a href="/">
															<FaFacebookF />
														</a>
														<a href="/">
															<FaTwitter />
														</a>
														<a href="/">
															<FaGooglePlusG />
														</a>
													</div>
												</div>
											</div>
										</div>

										<div className="active-single-author">
											<div className="different-author-post">
												<div className="d-flex">
													<div className="mr-25">
														<a href="/">
															<img src={require('../../assets/img/blog/dif-author1.png')} alt="" />
														</a>
													</div>
													<div className="single-author">
														<div className="d-flex mb-20">
															<div className="author-name">
																<a href="/">
																	<h4>Adam Willamson</h4>
																</a>
															</div>
															<div className="">
																<ul>
																	<li>
																		<a href="/">
																			<FaFacebookF />
																		</a>
																	</li>
																	<li>
																		<a href="/">
																			<FaTwitter />
																		</a>
																	</li>
																	<li>
																		<a href="/">
																			<FaGooglePlusG />
																		</a>
																	</li>
																</ul>
															</div>
														</div>
														<p>
															Spiffing spend a penny geeza butty cup of tea cheeky noblimey guvnor hed in butty cup of tea cheeky no
															biggie
															morish.
														</p>
													</div>
												</div>
											</div>
										</div>

										<div className="comments-area">
											<h4>Comments (<span>3</span>)</h4>
											<div className="comment-list">
												<div className="single-comment">
													<div className="user d-flex">
														<div className="thumb">
															<img src={require('../../assets/img/blog/c1.png')} alt="" />
														</div>
														<div className="desc">
															<h5><a href="/">Met Jimmy</a></h5>
															<p className="date">09/02/2018</p>
															<p className="date">11:00:58 AM</p>
															<p className="comment">
																Spiffing boot crikey bamboozled butty excuse my French brown bread bamb oozled the butty excuse my French
																brown bread French brown bread sloshed bum bag a butty nice excuse my barney pardon nicked.
												</p>
															<div className="reply-btn">
																<a href="/" className="primary-btn text-uppercase">reply</a>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="comment-list left-padding">
												<div className="single-comment">
													<div className="user d-flex">
														<div className="thumb">
															<img src={require('../../assets/img/blog/c2.png')} alt="" />
														</div>
														<div className="desc">
															<h5><a href="/">Rita Josefh</a></h5>
															<p className="date">09/02/2018</p>
															<p className="date">11:00:58 AM</p>
															<p className="comment">
																Butty cup of tea cheeky no biggie morish. biggie morish nice one lavatorya coren duplcate guvnor blow.
															</p>
															<div className="reply-btn">
																<a href="/" className="primary-btn text-uppercase">reply</a>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="comment-list">
												<div className="single-comment">
													<div className="user d-flex">
														<div className="thumb">
															<img src={require('../../assets/img/blog/c1.png')} alt="" />
														</div>
														<div className="desc">
															<h5><a href="/">Jem Young</a></h5>
															<p className="date">09/02/2018</p>
															<p className="date">11:00:58 AM</p>
															<p className="comment">
																Spiffing boot crikey bamboozled butty excuse my French brown bread bamb oozled the butty excuse my French
																brown bread French brown bread sloshed bum bag a butty nice excuse my barney pardon nicked.
															</p>
															<div className="reply-btn">
																<a href="/" className="primary-btn text-uppercase">reply</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="comment-form">
											<h4>Leave a Comment</h4>
											<form>
												<div className="form-group form-inline">
													<div className="form-group col-lg-6 col-md-12 name">
														<input type="text" className="form-control" id="name" placeholder="Enter Name" />
													</div>
													<div className="form-group col-lg-6 col-md-12 email">
														<input type="email" className="form-control" id="email" placeholder="Enter email address" />
													</div>
												</div>
												<div className="form-group">
													<input type="text" className="form-control" id="subject" placeholder="Subject" />
												</div>
												<div className="form-group">
													<textarea className="form-control mb-20" rows="5" name="message" placeholder="Messege" required=""></textarea>
												</div>
												<button className="primary-btn text-uppercase">send message</button>
											</form>
										</div>
									</div>
								</div>
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

export default HomePage;
