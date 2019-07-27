import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import weez from '../assets/images/weez.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sean</title>
            <meta name="description" content="Sean2 page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Sean</h1>
                    </header>
                    <div className="box alt">
                        <div className="grid-wrapper">
                            <div className="col-4">
                                <span className="image fit">
                                    <img src={weez} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <p>Sean bio here</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
