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
import pic24 from '../assets/images/pic24.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Sean Will Help You"
                    meta={[
                        { name: 'description', content: 'Helping you' },
                        { name: 'keywords', content: 'Help, you' },
                    ]}
                >
                </Helmet>

                <Banner />
                    <div className="grid-wrapper">
                    <div className="col-12">
                    <div id="main">
                        <section id="one">
                            <article style={{backgroundImage: `url(${pic24})`}}>
                                <header className="major">
                                    <h3>S.E.A.N</h3>
                                <p>Who we are and what we do</p>
                            </header>
                        <Link to="/landingSean" className="link primary"></Link>
                    </article>
                </div>
                    <div ClassName="grid-wrapper">
                    <div ClassName="col-12">
                        <section id="two">
                            <article style={{backgroundImage: `url(${pic02})`}}>
                                <header className="major">
                                    <h3>C.A.R.E.E.R</h3>
                                <p>Find the career path that is right for you!</p> 
                            </header>
                        <Link to="/landingOverview" className="link primary"></Link>
                     </article>
                </div>
                    <div ClassName="grid-wrapper">
                    <div ClassName="col-12">
                        <section id="three">
                            <article style={{backgroundImage: `url(${pic03})`}}>
                                <header className="major">
                                    <h3>L.E.A.R.N</h3>
                                <p>All the education and study materials you will need...in one place!</p>
                            </header>
                        <Link to="/landing" className="link primary"></Link>
                    </article>
                </div>
                    <div ClassName="grid-wrapper">
                    <div ClassName="col-12">
                        <section id="four"> 
                            <article style={{backgroundImage: `url(${pic06})`}}>
                                <header className="major">
                                    <h3>O.T.H.E.R</h3>
                                <p>Other</p>
                            </header>
                        <Link to="/landing" className="link primary"></Link>
                    </article>
                </div>
                </section>
                    <div ClassName="grid-wrapper">
                    <div ClassName="col-12">
                        <section id="five">
                            <header className="major">
                                <h2>L.I.N.K.S</h2>
                                    </header>
                                        <p>Links</p>
                                    <ul className="actions">
                                <li><Link to="/landing" className="button next">Click Here</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
