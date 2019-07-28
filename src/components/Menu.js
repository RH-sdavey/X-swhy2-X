import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingSean">SEAN</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/gosysadmin">SYSADMIN</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/godeveloper">DEVELOPER</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/godevops">DEVOPS ENGINEER</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">elements ( remove later )</Link></li>
            </ul>

          





        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

// this block goes between the </section> and </div>
// <ul className="actions vertical">
//     <li><a href="#" className="button special fit">Get Started</a></li>
//     <li><a href="#" className="button fit">Log In</a></li>
// // </ul>
