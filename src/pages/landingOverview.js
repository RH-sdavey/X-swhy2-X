import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingOverview from '../components/BannerLandingOverview'

import swhy14 from '../assets/images/swhy14.jpg'
import swhy9 from '../assets/images/swhy9.jpg'
import swhy4 from '../assets/images/swhy4.jpg'
import swhy10 from '../assets/images/swhy10.jpg'
import swhy15 from '../assets/images/swhy15.jpg'
import swhy12 from '../assets/images/swhy12.jpg'
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
                                <h3>So what does a SysAdmin do?</h3>
                            </header>
                              <p>Fun fact: All Seans involved in building in this site, started as Sysadmins!<br/>
                              A Systems Administrator could be responsible for any/all of the following (dont worry if you understand these terms now, you will soon)
                              </p>
                            <div className="table-wrapper">
                                   <table className="alt">
                                       <tbody align="center">
                                           <tr>
                                               <td>System Hardening</td>
                                               <td>Patching Software</td>
                                               <td>Upgrading OS</td>
                                           </tr>
                                           <tr>
                                               <td>Editing config files</td>
                                               <td>Process mgmt</td>
                                               <td>Managing ports</td>
                                           </tr>
                                           <tr>
                                               <td>NTP</td>
                                               <td>Accesses</td>
                                               <td>User mgmt</td>
                                           </tr>
                                           <tr>
                                               <td>System Monitoring</td>
                                               <td>Scripting</td>
                                               <td>Incident mgmt</td>
                                           </tr>
                                           <tr>
                                               <td>HW mgmt</td>
                                               <td>Network configuration</td>
                                               <td>Middleware mgmt</td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </div>
                            <div className="grid-wrapper">
                              <div className="col-6">
                                  <h3>Pros</h3>
                                        <ul>
                                            <li>Dolor etiam magna etiam.</li>
                                            <li>Sagittis lorem eleifend.</li>
                                            <li>Felis dolore viverra.</li>
                                        </ul>
                              </div>
                              <div className="col-6">
                                  <h3>Cons</h3>
                                          <ul>
                                              <li>Dolor etiam magna etiam.</li>
                                              <li>Sagittis lorem eleifend.</li>
                                              <li>Felis dolore viverra.</li>
                                          </ul>
                            </div>
                            <ul className="actions">
                                <li><Link to="/gosysadmin" className="button">Become a syadmin!</Link></li>
                            </ul>
                          </div>
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
                                <h3>So what does a Developer do?</h3>
                            </header>
                            <p>No two days for developers are the same... but they a do any/all of these things usually...</p>
                            <div className="table-wrapper">
                                   <table className="alt">
                                       <tbody align="center">
                                           <tr>
                                               <td>Coding (duh)</td>
                                               <td>Writing Unit Tests</td>
                                               <td>Writing System Tests</td>
                                           </tr>
                                           <tr>
                                               <td>Creating testing environments</td>
                                               <td>Checking google/stackoverflow (a lot!)</td>
                                               <td>Scripting</td>
                                           </tr>
                                           <tr>
                                               <td>JIRA</td>
                                               <td>Git</td>
                                               <td>Checking Documentation</td>
                                           </tr>
                                           <tr>
                                               <td>Code Reviews</td>
                                               <td>Networking</td>
                                               <td>Being curious</td>
                                           </tr>
                                           <tr>
                                               <td>Databases</td>
                                               <td>Automation</td>
                                               <td>Being confused (its actually a skill)</td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </div>

                            <div className="grid-wrapper">
                            <div className="col-6">
                                <h3>Pros</h3>
                                      <ul>
                                          <li>Dolor etiam magna etiam.</li>
                                          <li>Sagittis lorem eleifend.</li>
                                          <li>Felis dolore viverra.</li>
                                      </ul>
                            </div>
                            <div className="col-6">
                                <h3>Cons</h3>
                                        <ul>
                                            <li>Dolor etiam magna etiam.</li>
                                            <li>Sagittis lorem eleifend.</li>
                                            <li>Felis dolore viverra.</li>
                                        </ul>
                            </div>
                            </div>
                            <ul className="actions">
                                <li><Link to="/godeveloper" className="button">Become a developer!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/godevops" className="image">
                        <img src={swhy15} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>What is a Devops Engineer anyway?</h3>
                            </header>
                            <p>Devops is a more advanced position between developer and sysadmin (operations) = devops<br/>
                               Below is a very limited number of the skills that it takes to be a good devops engineer
                            </p>
                            <div className="table-wrapper">
                                   <table className="alt">
                                       <tbody align="center">
                                           <tr>
                                               <td>Curiosity</td>
                                               <td>Curiosity</td>
                                               <td>Curiosity</td>
                                           </tr>
                                           <tr>
                                               <td>Patience</td>
                                               <td>Patience</td>
                                               <td>Patience</td>
                                           </tr>
                                           <tr>
                                               <td>GIT</td>
                                               <td>Automation</td>
                                               <td>Openstack</td>
                                           </tr>
                                           <tr>
                                               <td>Jenkins</td>
                                               <td>Docker</td>
                                               <td>Ansible</td>
                                           </tr>
                                           <tr>
                                               <td>IOT</td>
                                               <td>Curiosity!</td>
                                               <td>Patience!</td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </div>

                            <div className="grid-wrapper">
                            <div className="col-6">
                                <h3>Pros</h3>
                                      <ul>
                                          <li>Dolor etiam magna etiam.</li>
                                          <li>Sagittis lorem eleifend.</li>
                                          <li>Felis dolore viverra.</li>
                                      </ul>
                            </div>
                            <div className="col-6">
                                <h3>Cons</h3>
                                        <ul>
                                            <li>Dolor etiam magna etiam.</li>
                                            <li>Sagittis lorem eleifend.</li>
                                            <li>Felis dolore viverra.</li>
                                        </ul>
                            </div>
                            </div>
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
