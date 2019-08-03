import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import swhyvim from '../../assets/images/swhy-vim.jpg'

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
                        <h3>Sometimes you need to open multiple files in VIM and quickly move between them, rather than opening, editing, closing, reopening etc. Lets learn how,</h3>
                        <h4>Tabs in VIM</h4>
                      </div>
                      <div className="col-6">
                        <p>Open any file in the VIM editor</p>
                        <pre><code>vim /etc/hosts</code></pre>
                      </div>
                      <div className="col-6">
                        <p>Image here</p>
                        <span className="image fit"><img src={swhyvim} alt="" /></span>
                      </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
