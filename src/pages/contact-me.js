import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class ContactMe extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SEO title="Contact Me" />
                <h4>Contact Me</h4>
            </Layout>
        )
    }

}