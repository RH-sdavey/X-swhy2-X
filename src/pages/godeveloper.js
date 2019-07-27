import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingDeveloper from '../components/BannerLandingDeveloper'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Who is Sean</title>
            <meta name="description" content="Who is Sean" />
        </Helmet>

        <BannerLandingDeveloper />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Developer</h2>
                    </header>
                    <p>DeveloperDeveloperDeveloperDeveloperDeveloper</p>
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
                                <h3>Developer</h3>
                            </header>
                            <p>DeveloperDeveloperDeveloperDeveloperDeveloperDeveloper</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Developer</h3>
                            </header>
                            <p>DeveloperDeveloperDeveloperDeveloperDeveloper</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
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
                                <h3>Developer</h3>
                            </header>
                            <p>DeveloperDeveloperDeveloperDeveloperDeveloperDeveloper</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
