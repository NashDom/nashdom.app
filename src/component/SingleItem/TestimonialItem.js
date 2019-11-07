import React from 'react';

function TestimonialItem(props) {
	return (
		<div>
			<img className="d-none" alt="" />
			<div className="single-testimonial item d-flex flex-row text-left">
				<div className="thumb">
					<img className="img-fluid" src={props.imgUrl} alt="" />
				</div>
				<div className="desc">
					<p>{props.speech}</p>
					<h4>{props.name}</h4>
					<p>{props.designation}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialItem;
