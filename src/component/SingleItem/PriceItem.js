import React from 'react';

function PriceItem(props) {
	return (
		<div className="single-pricing">
			<div className="pricing-head">
				<h4>{props.package}</h4>
				<p>{props.companyType}</p>
				<h2>
					$ {props.amount}
					<span>/mo</span>
				</h2>
			</div>
			<div className="pricing-content">
				<ul className="pricing-lists">
					<li>{props.website}</li>
					<li>{props.storage}</li>
					<li>{props.emailAccount}</li>
					<li>{props.monthlyBandwigth}</li>
					<li>{props.freeWebsiteBuilder}</li>
					<li>{props.domain}</li>
				</ul>
				<a href="/" className="primary-btn text-uppercase">
					Get Started
				</a>
			</div>
		</div>
	);
}

export default PriceItem;
