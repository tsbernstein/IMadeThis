import React from 'react';
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a  href="https://github.com/tsbernstein">
                    <SiGithub className='footer-icon'/>
                </a>
            </div>
            <div>
                <SiLinkedin className='footer-icon'/>
            </div>
        </div>
    )
}

export default Footer;