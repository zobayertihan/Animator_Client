import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

const Header = () => {
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <div className="flex gap-4">
                    <img className='rounded-full' src={logo} alt="" />
                    <Link className='flex items-center text-2xl'><h1>Animator</h1></Link>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link rel="noopener noreferrer" to={'/blog'} className="flex items-center px-4 -mb-1 dark:border-transparent">Blog</Link>
                        </li>
                    </ul>
                    <button className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Log in</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;