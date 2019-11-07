import React from 'react';
import { FaCalendar } from 'react-icons/fa';

function RecentPostItem(props) {
	return (
		<div className="single-recent-post d-flex flex-row">
			<div className="row w-100">
				<div className="col-lg-4 col-md-2 col-sm-3 col-4 pr-0">
					<div className="recent-thumb">
						<img className="img-fluid" src={props.imgUrl} alt="" />
					</div>
				</div>
				<div className="col-lg-8 col-md-8 col-sm-9 col-8">
					<div className="recent-details">
						<a href="/blog-details">
							<h4>{props.post}</h4>
						</a>
						<p className="text-uppercase">
							<a href="/">
								<FaCalendar className="mr-10" />
								{props.date}
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecentPostItem;
