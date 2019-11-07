import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink as RouterNavLink, Switch } from "react-router-dom";
import { Link } from "react-scroll";
import HomePage from '../MainPages/HomePage';
import BlogPage from '../MainPages/BlogPage';
import BlogDetails from '../MainPages/BlogDetails';
import BlogDetailsSidebar from '../MainPages/BlogDetailsSidebar';
import Error from '../MainPages/Error';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			scrolled: false
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== true) {
				this.setState({
					scrolled: true
				});
			} else {
				this.setState({
					scrolled: false
				})
			}
		});
	}
	componentWillUnmount() {
		window.addEventListener('scroll');
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Router >
				<div>
					<header id="header" className={this.state.scrolled ? 'header-scrolled' : ''}>
						<div className="container">
							<Navbar color="" expand="lg">
								<NavbarBrand tag={RouterNavLink} to={`${process.env.PUBLIC_URL}/`}>
									<img className="logo1" src={require('../../assets/img/logo_black.png')} alt="" />
									<img className="logo2" src={require('../../assets/img/logo_white.png')} alt="" />
								</NavbarBrand>
								<NavbarToggler onClick={this.toggle} />
								<Collapse isOpen={this.state.isOpen} navbar>
									<Nav className="ml-auto" navbar>
										<NavItem>
											<NavLink tag={RouterNavLink} to={`${process.env.PUBLIC_URL}/`} >Главное</NavLink>
										</NavItem>
										<NavItem>
											<Link
												className="nav-link"
												to="features"
												spy={true}
												smooth={true}
												offset={-70}
												duration={1000} href="#features"
											>
												Для жильцов
											</Link>
										</NavItem>
										<NavItem>
											<Link
												className="nav-link"
												to="forjek"
												spy={true}
												smooth={true}
												offset={-70}
												duration={1000} href="#forjek"
											>
												Для ЖК
											</Link>
										</NavItem>
										
									</Nav>
									<Nav className="ml-auto" navbar>
										<NavItem>
											<NavLink className="primary-btn" to="#">
												Скачать приложение
										</NavLink>
										</NavItem>
									</Nav>
								</Collapse>
							</Navbar>
						</div>
					</header>

					<Switch>
						<Route exact strict path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
						<Route path={`${process.env.PUBLIC_URL}/blog`} component={BlogPage} />
						<Route path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails} />
						<Route path={`${process.env.PUBLIC_URL}/blog-details-sidebar`} component={BlogDetailsSidebar} />
						<Route component={Error} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Header;
