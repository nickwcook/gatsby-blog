import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
	<div>
		<Header />
		<main>{children}</main>
		<Footer />
	</div>
)

export default Layout;