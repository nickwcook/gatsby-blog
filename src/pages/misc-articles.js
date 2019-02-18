import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class MiscArticles extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SEO title="Miscellaneous Articles" />
                <h4>Miscellaneous Articles</h4>
            </Layout>
        )
    }

}