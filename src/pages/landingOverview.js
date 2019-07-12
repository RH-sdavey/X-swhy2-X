import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingOverview from '../components/BannerLandingOverview'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const LandingOverview = (props) => (
    <Layout>
        <Helmet>
            <title>What do you want to be?</title>
            <meta name="description" content="What do you want to be" />
        </Helmet>

        <BannerLandingOverview />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>So wht do you want to be?</h2>
                    </header>
                    <p>description here!</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sysadmin</h3>
                            </header>
                            <p>Sysadmin description here.</p>
                            <p>Pros and cons</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Become a syadmin!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div style="align:right" className="inner">
                            <header className="major">
                                <h3>Developer</h3>
                            </header>
                            <p>Developer description here.</p>
                            <p>Pros and cons</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Become a developer!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Devops</h3>
                            </header>
                            <p>Developer description here.</p>
                            <p>Pros and cons</p>                          
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Become a devops!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </Layout>
)
export default LandingOverview
