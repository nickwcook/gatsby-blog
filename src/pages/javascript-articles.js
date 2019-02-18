import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class JavaScriptArticles extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SEO title="JavaScript Articles" />
                <h4>JavaScript Articles</h4>
            </Layout>
        )
    }

}