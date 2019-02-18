import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class ReactJSArticles extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SEO title="ReactJS Articles" />
                <h4>ReactJS Articles</h4>
            </Layout>
        )
    }

}