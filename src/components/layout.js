import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
	<div>
		<header>
			Nick Cook
		</header>
		<main>{children}</main>
		<footer>
			Developed with Gatsby
		</footer>
	</div>
)

export default Layout;