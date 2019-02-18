import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class CV extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SEO title="My CV" />
                <h4>CV</h4>
            </Layout>
        )
    }

}