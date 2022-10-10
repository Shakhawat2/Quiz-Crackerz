import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen shadow-lg md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/48482230db0c4d1ac6e61fc06543ba59" className='h-10' alt="No Image" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-blue-500 uppercase">
                        jch Quiz contest
                    </span>
                </a>
                <ul className=" items-center hidden space-x-8 lg:flex">
                    <li>
                        <NavLink
                            to="/home"
                            aria-label="Home"
                            title="Home"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400 underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/topic"
                            aria-label="Topic"
                            title="Topic"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400 underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4"}
                        >
                            Topic
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistic"
                            aria-label="Statistic"
                            title="Statistic"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400 underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4"}
                        >
                            Statistic
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            aria-label="Blog"
                            title="Blog"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400 underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4"}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            aria-label="About"
                            title="About"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400 underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:underline decoration-blue-600 decoration-solid decoration-4 underline-offset-4"}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            href="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <svg
                                                className="w-8 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <rect x="3" y="1" width="7" height="12" />
                                                <rect x="3" y="17" width="7" height="6" />
                                                <rect x="14" y="1" width="7" height="6" />
                                                <rect x="14" y="11" width="7" height="12" />
                                            </svg>
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Company
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Product
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Product pricing"
                                                title="Product pricing"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Pricing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                About us
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;