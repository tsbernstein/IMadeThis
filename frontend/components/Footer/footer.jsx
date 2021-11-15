import React from 'react';
import { SiLinkedin, SiGithub, SiAngellist } from "react-icons/si";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='author-info'>
                <p>Author: Tyler Bernstein</p>
                <p>Phone: 928-580-2843</p>
                <p>Email: tsbernstein2593@gmail.com</p>
            </div>
            <div className='links'>
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
                <div>
                    <a 
                        href="https://angel.co/u/tyler-bernstein-5"
                        target="_blank"
                    >
                        <SiAngellist className='footer-icon'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;