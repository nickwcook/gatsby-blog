import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class NodeJSArticles extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SEO title="NodeJS Articles" />
                <h4>NodeJS Articles</h4>
            </Layout>
        )
    }

}