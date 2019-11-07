import React from 'react';
import { FaCalendar, FaImage, FaUtensils, FaComment } from 'react-icons/fa';
import nextIcon from '../../assets/img/blog/next-icon.png';

function BlogPostItem(props) {
	return (
		<div className="single-post-item">
			<figure>
				<img className="post-img img-fluid" src={props.imgUrl} alt="" />
			</figure>
			<h3>
				<a href="/blog-details">{props.heading}</a>
			</h3>
			<div className="post-box mb-25">
				<div className="d-flex">
					<div>
						<a href="/blog-details">
							<img src={props.thumbUrl} alt="" />
						</a>
					</div>
					<div className="post-meta">
						<div className="meta-head">
							<a href="/">
								{props.writer}
							</a>
						</div>
						<div className="meta-details">
							<ul>
								<li>
									<a href="/blog-details">
										<FaCalendar className="mr-10" />
										{props.date}
									</a>
								</li>
								<li>
									<a href="/blog-details">
										<FaImage className="mr-10" />
										{props.post_type}
									</a>
								</li>
								<li>
									<a href="/blog-details">
										<FaUtensils className="mr-10" />
										{props.post_cat}
									</a>
								</li>
								<li>
									<a href="/blog-details">
										<FaComment className="mr-10" />
										{props.post_comment}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p>{props.post_info}</p>
			</div>
			<a href="/blog-details" className="blog-btn text-uppercase mt-15">
				continue Reading
				<img src={nextIcon} alt="" />
			</a>
		</div>
	);
}

export default BlogPostItem;
