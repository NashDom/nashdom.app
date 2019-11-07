import React, { Component } from 'react';
import FeatureItem from '../SingleItem/FeatureItem';
import serviceList from '../../data/service';

class Service extends Component {
	constructor(props) {
		super(props);
		this.state = serviceList;
	}

	render() {
		const serviceItems = this.state.serviceList.map((item) => {
			return (
				<div key={item.id} className="col-lg-6 col-sm-6 col-md-6">
					<FeatureItem key={item.id} heading={item.heading} info={item.info} imgUrl={item.imgUrl} />
				</div>
			);
		});

		return (
			<section className="service-area relative">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div
								className="service-left animate"
								data-animate="fadeIn"
								data-duration="1.5s"
								data-delay="0.2s"
							>
								<img className="img-fluid img-box-shadow" src={require('../../assets/img/iphone1.png')} alt="" />
							</div>
						</div>
						<div className="col-lg-7">
							<div className="service-right">
								<div className="row">{serviceItems}</div>
							</div>
						</div>
					</div>
					<img className="round-img img-fluid" src={require('../../assets/img/rounds.png')} alt="" />

					<div className="service-shapes">
						<img src={require('../../assets/img/service/shape1.png')} className="shape shape1 animate" alt="" />
						<img src={require('../../assets/img/service/shape2.png')} className="shape shape2 animate" alt="" />
						<img src={require('../../assets/img/service/shape3.png')} className="shape shape3 animate" alt="" />
						<img src={require('../../assets/img/service/shape4.png')} className="shape shape4 animate" alt="" />
						<img src={require('../../assets/img/service/shape5.png')} className="shape shape5 animate" alt="" />
						<img src={require('../../assets/img/service/shape6.png')} className="shape shape6 animate" alt="" />
						<img src={require('../../assets/img/service/shape4.png')} className="shape shape7 animate" alt="" />
						<img src={require('../../assets/img/service/shape1.png')} className="shape shape8 animate" alt="" />
					</div>
				</div>
			</section>
		);
	}
}

export default Service;
