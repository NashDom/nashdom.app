import React, { Component } from 'react';
import BlogPostItem from '../SingleItem/BlogPostItem';
import blogPostData from '../../data/blog-post';

class BlogPost extends Component {
	constructor(props) {
		super(props);
		this.state = blogPostData;
	}

	render() {
		const blogPostItems = this.state.blogPostList.map((item) => {
			return (
				<BlogPostItem 
				key={item.id}
				imgUrl={item.imgUrl}
				heading={item.heading}
				thumbUrl={item.thumbUrl}
				writer={item.writer}
				date={item.date}
				post_type={item.post_type}
				post_cat={item.post_cat}
				post_comment={item.post_comment}
				post_info={item.post_info}
				/>
			);
		});

		return (
			<section className="post-area">
				{blogPostItems}
			</section>
		);
	}
}

export default BlogPost;
