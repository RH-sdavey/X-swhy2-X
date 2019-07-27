import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import swhy1 from '../assets/images/swhy1.jpg'
import swhy3 from '../assets/images/swhy3.jpg'
import swhy14 from '../assets/images/swhy14.jpg'
import swhy9 from '../assets/images/swhy9.jpg'
import swhy13 from '../assets/images/swhy13.jpg'
import swhy15 from '../assets/images/swhy15.jpg'

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
                        <article style={{backgroundImage: `url(${swhy1})`}}>
                            <header className="major">
                                <h1>SEAN</h1>
                                <p>Who we are and what we do</p>
                            </header>
                            <Link to="/landingSean" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${swhy3})`}}>
                            <header className="major">
                                <h3>Who do YOU want to be?</h3>
                                <p>Click here for an overview of our paths</p>
                            </header>
                            <Link to="/landingOverview" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${swhy14})`}}>
                            <header className="major">
                                <h3>Sysadmin</h3>
                                <p>Won't somebody please think of the uptime...</p>
                            </header>
                            <Link to="/gosysadmin" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${swhy9})`}}>
                            <header className="major">
                                <h3>Developer</h3>
                                <p>Make all the things!</p>
                            </header>
                            <Link to="/godeveloper" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${swhy15})`}}>
                            <header className="major">
                                <h3>Devops</h3>
                                <p>Your wildest dreams come true...</p>
                            </header>
                            <Link to="/godevops" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${swhy13})`}}>
                            <header className="major">
                                <h3>Other</h3>
                                <p>Stuff that all IT people just google...</p>
                            </header>
                            <Link to="/goother" className="link primary"></Link>
                        </article>
                    </section>





                </div>

            </Layout>
        )
    }
}

export default HomeIndex

// goes in the gap between </section> and </div> on line ~76
// <section id="two">
//      <div className="inner">
//          <header className="major">
//              <h2>Interesting Links</h2>
//          </header>
//          <p>I pity the fool who don't read my links!</p>
//          <ul className="actions">
//              <li><Link to="/landing" className="button next">Get Started</Link></li>
//          </ul>
//      </div>
//  </section>
