import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class AngularArticles extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SEO title="Angular Articles" />
                <h4>Angular Articles</h4>
            </Layout>
        )
    }

}