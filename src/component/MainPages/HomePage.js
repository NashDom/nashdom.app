import React, { Component } from 'react';
import Banner from '../Sections/Banner';
import Brand from '../Sections/Brand';
import About from '../Sections/About';
import { Feature, AnotherFeature } from '../Sections/Feature';
import Service from '../Sections/Service';
import Screenshot from '../Sections/Screenshot';
import Pricing from '../Sections/Pricing';
import Testimonial from '../Sections/Testimonial';
import Subscribe from '../Sections/Subscribe';
import Contact from '../Sections/Contact';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<main>
				<Banner />
				<Brand />
				<Feature />
				
				<AnotherFeature />
			
			</main>
		);
	}
}

export default HomePage;
