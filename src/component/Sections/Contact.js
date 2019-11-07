import React, { Component } from 'react';
import SectionTitle from '../Elements/SectionTitle';
import { FaHome, FaHeadphones, FaEnvelope } from 'react-icons/fa';
import contactData from '../../data/contact';
import GoogleApiWrapper from '../Elements/GoogleMap';
import axios from 'axios';
const API_PATH = 'http://localhost:3000/farfly/api/index.php';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactData,
			name: '',
			email: '',
			subject: '',
			message: '',
			mailSent: false,
			error: null
		};
	}
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};


	handleFormSubmit = e => {
		e.preventDefault();
		axios({
			method: 'post',
			url: `${API_PATH}`,
			headers: { 'content-type': 'application/json' },
			data: this.state
		})
			.then(result => {
				this.setState({
					mailSent: result.data.sent
				})
			})
			.catch(error => this.setState({ error: error.message }));
	};

	render() {
		return (
			<section className="contact-area section-gap" id="contact">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 text-center">
							<SectionTitle title={this.state.contactData.title} text={this.state.contactData.text} />
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div style={{ height: '650px', width: '100%' }}>
								<GoogleApiWrapper />
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<div className="contact-info">
								<div className="single-info d-flex">
									<div className="info-icon">
										<FaHome />
									</div>
									<div className="info-desc">
										<h5>Los Angeles, United States</h5>
										<p>Santa monica bullevard</p>
									</div>
								</div>
								<div className="single-info d-flex">
									<div className="info-icon">
										<FaHeadphones />
									</div>
									<div className="info-desc">
										<h5>00 (440) 9865 562 9865</h5>
										<p>Mon to Fri 9am to 6 pm</p>
									</div>
								</div>
								<div className="single-info d-flex">
									<div className="info-icon">
										<FaEnvelope />
									</div>
									<div className="info-desc">
										<h5>support@codepixar.com</h5>
										<p>Send us your query anytime!</p>
									</div>
								</div>
							</div>

							<div className="contact-form-section">
								<form
									className="contact-form-area contact-page-form contact-form text-right"
									id="myForm"
									action="#"
									method="post"
								>
									<div className="row">
										<div className="col-lg-12 form-group">
											<input
												id="name"
												name="name"
												placeholder="Enter your name"
												className="common-input mb-20 form-control"
												required="required"
												type="text"
												value={this.state.name}
												onChange={e => {
													this.setState({
														name: e.target.value
													})
												}}
											/>
											<input
												id="email"
												name="email"
												placeholder="Enter email address"
												className="common-input mb-20 form-control"
												required="required"
												type="email"
												value={this.state.email}
												onChange={e => {
													this.setState({
														email: e.target.value
													})
												}}
											/>
											<input
												id="subject"
												name="subject"
												placeholder="Enter your subject"
												className="common-input mb-20 form-control"
												required="required"
												type="text"
												value={this.state.subject}
												onChange={e => {
													this.setState({
														subject: e.target.value
													})
												}}
											/>

											<textarea
												id="message"
												className="common-textarea mt-10 form-control"
												name="message"
												placeholder="Messege"
												required="required"
												value={this.state.message}
												onChange={e => {
													this.setState({
														message: e.target.value
													})
												}}
											/>
										</div>
										<div className="col-lg-12 text-left">
											<button type="submit" className="primary-btn text-uppercase" 
											// onClick={e => this.handleFormSubmit(e)}
											>Send Message</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
