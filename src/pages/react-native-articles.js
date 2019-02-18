import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class ReactNativeArticles extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SEO title="React Native Articles" />
                <h4>React Native Articles</h4>
            </Layout>
        )
    }

}