import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Sean will help you"
                    meta={[
                        { name: 'description', content: 'Helping you' },
                        { name: 'keywords', content: 'Help, you' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h1>Sean</h1>
                                <p>Who we are and what we do</p>
                            </header>
                            <Link to="/landingSean" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>So what do you want to be?</h3>
                                <p>Click here for an overview of our paths</p>
                            </header>
                            <Link to="/landingOverview" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Sysadmin</h3>
                                <p>Won't somebody please think of the uptime...</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Developer</h3>
                                <p>Make all the things!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Devops</h3>
                                <p>Your wildest dreams come true...</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Other</h3>
                                <p>Stuff that all IT people just google...</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Sean2</h3>
                                <p>Stufjust google...</p>
                            </header>
                            <Link to="/generic" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Interesting Links</h2>
                            </header>
                            <p>I pity the fool who don't read my links!</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
