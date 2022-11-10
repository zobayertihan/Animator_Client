import React, { useContext, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(e => console.error(e))
    }
    const active = "bg-gray-400 px-5 py-2";
    const normal = "";
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-gray-200">
            <div className="md:flex items-center justify-between mx-5">
                <div className="flex justify-between items-center py-4">
                    <div className='flex justify-center items-center mr-5'>
                        <img className='rounded-full w-10' src={logo} alt="" />
                        <Link className='text-black ml-5 text-2xl font-bold' to={'/'}> ANIMATOR</Link>
                    </div>
                    <div className="md:hidden">
                        <div
                            className="text-black-200 rounded-md "
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ?
                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                )
                                :
                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="text-md text-center text-black font-semibold items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">


                            {
                                user?.uid ?
                                    <>
                                        <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                            <NavLink className={({ isActive }) => isActive ? active : normal} to={'/services'}>Services</NavLink>
                                        </li>
                                        <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                            <NavLink className={({ isActive }) => isActive ? active : normal} to={'/myreviews'}>My reviews</NavLink>
                                        </li>
                                        <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                            <NavLink className={({ isActive }) => isActive ? active : normal} to={'/addservice'}>Add Service</NavLink>
                                        </li>
                                        <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                            <NavLink className={({ isActive }) => isActive ? active : normal} to={'/blog'}>Blog</NavLink>
                                        </li>
                                        <li>
                                            <button className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700" onClick={handleSignOut}>Sign Out</button>
                                        </li>
                                        <li>
                                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                                {
                                                    user?.uid ?
                                                        <img className="w-10 rounded-full" src={user?.photoURL} alt='' /> :
                                                        <FaUserAlt className='bg-blue-500' />
                                                }
                                            </div>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                            <NavLink className={({ isActive }) => isActive ? active : normal} to={'/blog'}>Blog</NavLink>
                                        </li>
                                        <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                            <NavLink className={({ isActive }) => isActive ? active : normal} to={'/signup'}>Sign Up</NavLink>
                                        </li>
                                        <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                            <NavLink className={({ isActive }) => isActive ? active : normal} to={'/login'}>Sign In</NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;