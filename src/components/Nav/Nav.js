import React from 'react'
import './Nav.css';
import 'font-awesome/css/font-awesome.min.css';
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
    render () {
        return (
            <div className="navbarHeader">
                <div className="headerCont">
                <a href="mailto:eric@erictsai.design"
                style={{
                    fontFamily: 'proxima-nova, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal'
                }}
                className="contactMe" >
                <FontAwesomeIcon className="contactIcon" icon={faCommentDots} />
                Contact Me
                </a>
                <nav>
                    <ul className="navLinks">
                        <li><a 
                                href="/" 
                                className="navLink-1" 
                                style={{
                                    fontFamily: 'proxima-nova, sans-serif',
                                    fontWeight: 400,
                                    fontStyle: 'normal'
                                }}>Work
                            </a></li>
                        <li><a 
                                href="/about" 
                                className="navLink-2"
                                style={{
                                    fontFamily: 'proxima-nova, sans-serif',
                                    fontWeight: 400,
                                    fontStyle: 'normal'
                                }}>About</a></li>
                        
                    </ul>
                </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;