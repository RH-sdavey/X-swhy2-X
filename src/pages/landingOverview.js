import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingOverview from '../components/BannerLandingOverview'

import swhy14 from '../assets/images/swhy14.jpg'
import swhy9 from '../assets/images/swhy9.jpg'
import pic10 from '../assets/images/pic10.jpg'

const LandingOverview = (props) => (
    <Layout>
        <Helmet>
            <title>Who do you want to be?</title>
            <meta name="description" content="What do you want to be" />
        </Helmet>

        <BannerLandingOverview />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>So what do you want to be?</h2>
                    </header>
                    <p>Below is an overview of our tutorial paths<br/>
                    With Descriptions, Pros and Cons and expectations for each career choice<br/>
                    Have a look through them and choose the best way for you
                    </p>

                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/gosysadmin" className="image">
                        <img src={swhy14} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SysAdmin</h3>
                            </header>
                            <p>A Systems Administrator is reponsible for...<br/>
                            Although the duties are varied, one thing is always true....<br/>
                            A SysAdmins work is never boring!
                            </p>
                            <div className="col-6">
                                <h3>Pros</h3>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            </div>
                            <div className="col-6">
                                <h3>Cons</h3>
                                <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.</p>
                            </div>
                            <ul className="actions">
                                <li><Link to="/gosysadmin" className="button">Become a syadmin!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/godeveloper" className="image">
                        <img src={swhy9} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Developer</h3>
                            </header>
                            <p>Developer description here.</p>
                            <p>Pros and cons</p>
                            <ul className="actions">
                                <li><Link to="/godeveloper" className="button">Become a developer!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/godevops" className="image">
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
                                <li><Link to="/godevops" className="button">Become a devops!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </Layout>
)
export default LandingOverview
