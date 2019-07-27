import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingSean from '../components/BannerLandingSean'

import sean from '../assets/images/sean.jpg'
import weez from '../assets/images/weez.jpg'
import swhy7 from '../assets/images/swhy7.jpg'

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
                       With a little work, supported by us, you can change your life<br/>
                       Follow our<strong> free </strong>tutorials on this site, to learn everything you need to know<br/>
                       to get your start in the IT industry</p>
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
                    <Link to="/sean2" className="image">
                        <img src={weez} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sean</h3>
                            </header>
                            <p>Three years ago I was working as a window cleaner when I came to visit Brno, Czech Republic and managed to secure an interview at a well known IT company and somehow got the (non-technical) job. I had no career aspirations or goals, I was lost and had no idea what I wanted from life, I was just happy to have a job. Shortly after starting I met Sean who was so enthuasiastic and motivating, he wanted to teach me everything he could. Now 6 months later I am a competent Sysadmin with a range of skills and knowledge eager to pass onto the next person. Sean helped me to realize that my passion was in IT specifically Linux and since then has pushed me to be better and helped me in every way possible and since that first day I have never looked back. I know and understand things I never even knew existed before and the great part is there is always more to learn. you're always challenging yourself to become better,
                            which is a beautiful thing!</p>
                            <ul className="actions">
                                <li><Link to="/sean2" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={swhy7} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>What we need from you</h3>
                            </header>
                            <p>What kind of person works in IT, and what we expect from you during these tutorials</p>
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
