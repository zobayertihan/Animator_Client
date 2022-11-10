import React from 'react';
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="dark:bg-gray-800 dark:text-gray-50">
            <div className="container flex justify-between mx-auto flex-col p-4 md:p-8 lg:flex-row divide-gray-400">
                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex lg:justify-start">
                    <Link to={'/blog'}><li>Blog</li></Link>
                    <Link to={'/services'}><li>Services</li></Link>
                </ul>
                <div className='flex items-center'>
                    <span className="dark:text-gray-400">© Copyright 2022. Animator. All Rights Reserved.</span>
                </div>
                <div className="flex justify-end items-center pt-6 lg:pt-0">
                    <div className="flex space-x-4">
                        <a rel="noopener noreferrer" href='/' title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <FaFacebook />
                        </a>
                        <a rel="noopener noreferrer" href="/" title="Pinterest" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <FaTwitter />
                        </a>
                        <a rel="noopener noreferrer" href="/" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <FaInstagram />
                        </a>
                        <a rel="noopener noreferrer" href="/" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <FaDiscord />
                        </a>
                        <a rel="noopener noreferrer" href="/" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;