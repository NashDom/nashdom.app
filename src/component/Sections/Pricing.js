import React, { Component } from 'react';
import SectionTitle from '../Elements/SectionTitle';
import PriceItem from '../SingleItem/PriceItem';
import priceData from '../../data/price';

class Pricing extends Component {
	constructor(props) {
		super(props);
		this.state = priceData;
	}

	render() {
		const priceItems = this.state.priceList.map((item) => {
			return (
				<div key={item.id} className="col-lg-3 col-sm-6">
					<PriceItem
						key={item.id}
						package={item.package}
						companyType={item.companyType}
						amount={item.amount}
						website={item.website}
						storage={item.storage}
						emailAccount={item.emailAccount}
						monthlyBandwigth={item.monthlyBandwigth}
						freeWebsiteBuilder={item.freeWebsiteBuilder}
						domain={item.domain}
					/>
				</div>
			);
		});
		return (
			<section className="pricing-area section-gap-top" id="pricing">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 text-center">
							<SectionTitle title={this.state.title} text={this.state.text} />
						</div>
					</div>
					<div className="row pricing">
						<div className="col-lg-3 col-sm-6">
							<div className="single-pricing animate active">
								<div className="pricing-head">
									<h4>
										Server &:amp; <br /> Hosting Features
									</h4>
									<a href="/" className="primary-btn gray text-uppercase">
										custom plan
									</a>
								</div>
								<div className="pricing-content">
									<ul className="pricing-lists">
										<li>Website</li>
										<li>Storage</li>
										<li>Email Account</li>
										<li>Monthly Bandwigth</li>
										<li>Free Website Builder</li>
										<li>Domain</li>
									</ul>
								</div>
							</div>
						</div>
						{priceItems}
					</div>
				</div>
			</section>
		);
	}
}

export default Pricing;
