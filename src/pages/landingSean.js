import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingSean from '../components/BannerLandingSean'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import sean from '../assets/images/sean.jpg'
import weez from '../assets/images/weez.jpg'

const LandingSean = (props) => (
    <Layout>
        <Helmet>
            <title>Who is Sean</title>
            <meta name="description" content="Who is Sean" />
        </Helmet>

        <BannerLandingSean />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Who we are and what we do</h2>
                    </header>
                    <p>Well, we are Sean and we want to help you change your career, to work in IT< br/> 
                       We both changed our careers, and with a little work, supported by us, you can too<br/> 
                       Who knows, maybe in a few weeks, you can make your own website to help others too<br/> 
                       Our help is <strong> completely free </strong> and always will be!</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/sean1" className="image">
                        <img src={sean} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sean</h3>
                            </header>
                            <p>In a previous life I was a chef, in a Japanese restaurant in New Zealand. Now I'm a Java Software Developer in Czech Republic. I've worked as a Sysadmin, Network Admin, QA Tester and I'm certifed in many other IT areas. I did all this in less than 2 years. With our help, you can do it in less than 1.</p>
                            <ul className="actions">
                                <li><Link to="/sean1" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={weez} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sean</h3>
                            </header>
                            <p>(TODO) put your description here mate</p>
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
                                <h3>How we're gonna help you</h3>
                            </header>
                            <p>Description of our sites goals here.</p>
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

export default LandingSean
