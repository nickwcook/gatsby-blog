import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1>PAGE NOT FOUND</h1>
		<p>The route you tried to access is not valid</p>
	</Layout>
)

export default NotFoundPage;