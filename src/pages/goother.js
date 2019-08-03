import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingOther from '../components/BannerLandingOther'

import swhy6 from '../assets/images/swhy6.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Who is Sean</title>
            <meta name="description" content="SWHY" />
        </Helmet>

        <BannerLandingOther />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Have a look</h2>
                    </header>
                    <p>Scroll down to search through our updates</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/tutorials/configVim" className="image">
                        <img src={swhy6} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>VIM Profiles</h3>
                            </header>
                            <p>How to configure profiles in VIM</p>
                            <ul className="actions">
                                <li><Link to="/configVim" className="button">Learn more</Link></li>
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
                                <h3>Other</h3>
                            </header>
                            <p>OtherOtherOtherOtherOther</p>
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
                                <h3>Other</h3>
                            </header>
                            <p>OtherOtherOtherOtherOtherOther</p>
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
