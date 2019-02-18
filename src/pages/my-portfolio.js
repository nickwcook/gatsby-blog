import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class Portfolio extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SEO title="Portfolio" />
                <h4>Portfolio</h4>
            </Layout>
        )
    }

}