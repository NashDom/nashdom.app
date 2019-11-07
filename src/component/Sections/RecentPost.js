import React, { Component } from 'react';
import RecentPostItem from '../SingleItem/RecentPostItem';
import recentPost from '../../data/recent-post';

class RecentPost extends Component {
	constructor(props) {
		super(props);
		this.state = recentPost;
	}

	render() {
		const recentPostItems = this.state.recentPostList.map((item) => {
			return (
				<RecentPostItem key={item.id} post={item.post} date={item.date} imgUrl={item.imgUrl} />
			);
		});

		return (
			<div className="single-widget recent-posts-widget">
				<h4 className="title"> <span></span> Recent Posts</h4>
				<div className="blog-list ">
					{recentPostItems}
				</div>
			</div>
		);
	}
}

export default RecentPost;
