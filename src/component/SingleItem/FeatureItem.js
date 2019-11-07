import React from 'react';

function FeatureItem(props) {
	return (
		<div className="single-features">
			<div className="features-icon d-flex align-items-center justify-content-center">
				<img
					src={props.imgUrl}
					alt=""
					className="animate"
					data-animate="rubberBand"
					data-duration="1s"
					data-delay="0.1s"
				/>
			</div>
			<div className="features-content">
				<h4>{props.heading}</h4>
				<div className="animate" data-animate="fadeIn" data-duration="1s" data-delay="0.2s">
					<p>{props.info}</p>
				</div>
			</div>
		</div>
	);
}

export default FeatureItem;
