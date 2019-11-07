import React from 'react';
import { FaCalendar } from 'react-icons/fa';

function PostInfoItem(props) {
	return (
		<div className="post-info text-left">
			<div className="d-flex align-items-center">
				<div>
					<img src={props.imgUrl} alt="" />
				</div>
				<div className="ml-20">
					<h5>
						<a href="/blog-details">{props.post}</a>
					</h5>
					<p>
						<a href="/">
							<FaCalendar className="mr-10" />
							{props.date}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default PostInfoItem;
