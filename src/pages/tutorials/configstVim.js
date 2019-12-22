import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import swhyvim from '../../assets/images/swhyvim.jpg'
import swhyvim2 from '../../assets/images/swhyvim2.jpg'
import swhyvim3 from '../../assets/images/swhyvim3.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>SWHY</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>How to configure Splits and Tabs in Vim</h1>
                    </header>
                    <span className="image maintutorial"><img src={swhyvim} alt="" /></span>
                    <div className="grid-wrapper">
                      <div className="col-12">
                        <h3>Sometimes you need to open multiple files in one VIM window and quickly move between them,<br/>
                            Lets learn how,</h3>
                        <h4>Tabs in VIM</h4>
                      </div>


                      <div className="col-6">
                        <p>Open any file in the VIM editor</p>
                        <pre><code>vim <strong>!filenamehere</strong></code></pre>
                        <p>Vim opens with your chosen file</p>
                      </div>
                      <div className="col-6">
                        <span className="image fittutorial"><img src={swhyvim2} alt="" /></span>
                      </div>


                      <div className="col-6">
                        <p>While in VIM, press the following keys</p>
                        <blockquote> you can press tab after typing :tabedit to see available files</blockquote>
                        <pre><code><strong>esc</strong>  :tabedit <strong>!filenamehere!</strong>  <strong>Enter</strong></code></pre>
                        <p>Vim opens your new file in a new tab</p>

                      </div>
                      <div className="col-6">
                      <span className="image fittutorial"><img src={swhyvim3} alt="" /></span>
                      </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
