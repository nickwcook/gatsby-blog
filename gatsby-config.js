module.exports = {
	siteMetadata: {
		title: `Nick Cook`,
		description: `Software developer. Specialist in modern JavaScript frameworks. Experience in developing full-stack applications.`,
		author: `Nick Cook`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-manifest`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					'material icons',
					`roboto: 300, 400, 500, 600`
				]
			}
		}
	],
}