import React, { Component } from 'react';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	render() {
		return (
			<section className="banner-area relative">
				<div className="container-fluid">
					<div className="row fullscreen align-items-center justify-content-start">
						<div className="col-lg-4">
							<div className="banner-content">
								<h1>Умный дом в Вашем ЖК</h1>
								<p>
									От камер до замков и оплаты услуг ЖК. <br/> Будьте на связи с соседями и получайте уведомления о проводимых работах.
								</p>

							</div>
						</div>
						<div className="col-lg-8">
							<div className="banner-device animate">
								<img className="banner-img banner-img1 img-fluid animate" src={require('../../assets/img/banner/banner-img1.png')} alt="" />
								<img className="banner-img banner-img2 img-fluid animate" src={require('../../assets/img/banner/banner-img2.png')} alt="" />
								<img className="banner-img banner-img3 img-fluid animate" src={require('../../assets/img/banner/banner-img3.png')} alt="" />
								<img className="banner-img banner-img4 img-fluid animate" src={require('../../assets/img/banner/banner-img4.png')} alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<ModalVideo
							channel="youtube"
							isOpen={this.state.isOpen}
							videoId="KUln2DXU5VE"
							onClose={() => this.setState({ isOpen: false })}
						/>
					</div>
				</div>

				<div className="shapes">
					<div className="shape shape1 animate" />
					<div className="shape shape2 animate" />
					<div className="shape shape3 animate" />
					<div className="shape shape4 animate" />
					<div className="shape shape5 animate" />
					<div className="shape shape6 animate" />
					<div className="shape shape7 animate" />
					<div className="shape shape8 animate" />
					<div className="shape shape9 animate" />
					<div className="shape shape10 animate" />
					<div className="shape shape11 animate" />
					<div className="shape shape12 animate" />
					<div className="shape shape13 animate" />
				</div>
			</section>
		);
	}
}

export default Banner;
