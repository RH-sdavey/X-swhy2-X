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
                            <p>In a previous life I was a chef, in a Japanese restaurant in New Zealand. Now I'm a Java Software Developer in Czech Republic. I've worked as a Sysadmin, Network Admin, QA Tester and I'm certifed in many other IT areas. I did all this in less than 2 years. With our help, you can do it in less than 1.<br/>
                                I have qualifications and certifications or just a heavy interest in the following subjects;
                            </p>
                            <div className="table-wrapper">
                                   <table className="alt">
                                       <tbody align="center">
                                           <tr>
                                               <td>RHCSA</td>
                                               <td>System Hardening</td>
                                               <td>Bash Scripting</td>

                                           </tr>
                                           <tr>
                                               <td>DEVOPS</td>
                                               <td>Python</td>
                                               <td>Java</td>
                                           </tr>
                                           <tr>
                                               <td>Docker</td>
                                               <td>Git</td>
                                               <td>Opensource Software</td>
                                           </tr>
                                           <tr>
                                               <td>Kubernetes</td>
                                               <td>Ethical Hacking</td>
                                               <td>Javascript</td>
                                           </tr>
                                           <tr>
                                               <td>Jenkins / CI Automation</td>
                                               <td>IOT</td>
                                               <td>Website Design</td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </div>
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
                            <p>Three years ago I was working as a window cleaner when I came to visit Brno, Czech Republic and managed to secure an interview at a well known IT company and somehow got the (non-technical) job. I had no career aspirations or goals, I was lost and had no idea what I wanted from life, I was just happy to have a job. Shortly after starting I met Sean who was so enthuasiastic and motivating, he wanted to teach me everything he could.<br/>
                             Now 6 months later I am a competent Sysadmin with a range of skills and knowledge eager to pass onto the next person. Sean helped me to realize that my passion was in IT, specifically Linux and since then has pushed me to be better and helped me in every way possible. Since that first day I have never looked back. I know and understand things I never even knew existed before and the great part is there is always more to learn. you're always challenging yourself to become better,<br/>
                             which is a beautiful thing!
                            </p>
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
                                <h3>You</h3>
                            </header>
                            <p>If you're on this page, chances are you want a change. Change of career, place of work, lifestyle or even country (or your one of our friends, hi!)<br/>
                            The truth is no single <strong>type</strong> of person that works in IT. This is a field of work that attracts that extrovert, introvert,
                            short, tall, happy, grumpy, crazy and lazy. One thing we are all doing is changing the world, for better or worse, in our own small way.<br/>
                            Full discosure, this is not an easy career change, you can't just "bumble" your way through it, it is hard work. For that exact reason, we created this
                            website... to take some of the workload from you. We want to help, no strings and no costs, <strong>none!</strong><br/>
                            With the skills we can teach you here, you can feel assured when you go for your first IT interview, you will know what your doing!
                            </p>
                            <ul className="actions">
                                <li><Link to="/landingOverview" className="button">So lets get started!</Link></li>
                            </ul>

                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default LandingSean
