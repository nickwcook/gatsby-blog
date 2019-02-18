import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import "./layout.scss";

const Layout = ({ children }) => (
	<div id="site">
		<Header />
		<main>{children}</main>
		<Footer />
	</div>
)

export default Layout;