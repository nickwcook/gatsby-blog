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
							<Link to="/">ReactJS</Link>
						</li>
						<li>
							<Link to="/">React Native</Link>
						</li>
						<li>
							<Link to="/">Angular</Link>
						</li>
						<li>
							<Link to="/">NodeJS</Link>
						</li>
						<li>
							<Link to="/">JavaScript</Link>
						</li>
						<li>
							<Link to="/">Other</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
)

export default Header;