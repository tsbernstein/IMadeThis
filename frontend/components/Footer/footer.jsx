import React from 'react';
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a 
                    href="https://github.com/tsbernstein"
                    target="_blank"
                >
                    <SiGithub className='footer-icon'/>
                </a>
            </div>
            <div>
                <a 
                    href="https://linkedin.com/in/tyler-bernstein-356ba0106"
                    target="_blank"
                >
                    <SiLinkedin className='footer-icon'/>
                </a>
            </div>
        </div>
    )
}

export default Footer;