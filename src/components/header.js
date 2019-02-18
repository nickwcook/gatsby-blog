import React from "react";
import { Link } from "gatsby";

import './header.scss';

const Header = (props) => (
	<header>
		<div className="header__content">
			<div className="row">
				<div>
					<Link to="/" className="btn btn--primary material-icons">search</Link>
				</div>
				<div>
					<p className="navbar__brand text-bold">Nick Cook</p>
				</div>
				<div>
					<nav className="navbar__nav--secondary">
						<ul>
							<li>
								<Link to="/my-portfolio">My Portfolio</Link>
							</li>
							<li>
								<Link to="/my-cv">My CV</Link>
							</li>
							<li>
								<Link to="/contact-me">Contact Me</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="row">
				<nav className="navbar__nav--primary">
					<ul>
						<li>
							<Link to="/" className="material-icons active">home</Link>
						</li>
						<li>
							<Link to="/reactjs-articles">ReactJS</Link>
						</li>
						<li>
							<Link to="/react-native-articles">React Native</Link>
						</li>
						<li>
							<Link to="/angular-articles">Angular</Link>
						</li>
						<li>
							<Link to="/nodejs-articles">NodeJS</Link>
						</li>
						<li>
							<Link to="/javascript-articles">JavaScript</Link>
						</li>
						<li>
							<Link to="/misc-articles">Miscellaneous</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
)

export default Header;