import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isWebOpen, setIsWebOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileWebOpen, setMobileWebOpen] = useState(false);

    const servicesDropdownRef = useRef(null);
    const webDropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Navigate on mobile menu item click and close menu
    const handleMobileItemClick = (path) => {
        navigate(path);
        setMenuOpen(false);
        // Reset dropdown states if needed
        setMobileServicesOpen(false);
        setMobileWebOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesDropdownRef.current &&
                !servicesDropdownRef.current.contains(event.target) &&
                !event.target.classList.contains('services-toggle')) {
                setServicesOpen(false);
                setIsWebOpen(false);
            }
            if (menuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                !event.target.classList.contains('hamburger-icon')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    const toggleServices = (e) => {
        e.stopPropagation();
        setServicesOpen(!servicesOpen);
        if (!servicesOpen) setIsWebOpen(false);
    };

    const toggleWeb = (e) => {
        e.stopPropagation();
        setIsWebOpen(!isWebOpen);
    };

    return (
        <nav className='bg-white shadow-xl relative top-0 z-[100]'>
            <div className="select-none flex justify-between items-center max-w-7xl mx-auto px-5 py-3 relative bg-white">
                {/* Logo */}
                <Link to="/">
                    <img src="./logo2.webp" className="sm:w-36 object-contain w-24 mt-[-45px] mb-[-45px]" alt="Logo" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex poppins-semibold gap-8 items-center text-lg cursor-pointer relative">
                    <li>
                        <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
                    </li>

                    {/* Services Dropdown */}
                    <li className="relative" ref={servicesDropdownRef}>
                        <div
                            className="flex items-center gap-1 hover:text-gray-600 transition-colors services-toggle cursor-pointer select-none"
                            onClick={toggleServices}
                        >
                            Services <span>{servicesOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                        </div>
                        {servicesOpen && (
                            <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg w-56 z-50 text-base py-1">
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                                    onClick={toggleWeb}
                                    ref={webDropdownRef}
                                >
                                    <div className="flex justify-between items-center">
                                        Website Development <span>{isWebOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                                    </div>

                                    {isWebOpen && (
                                        <ul className="mt-2 bg-white border rounded shadow-md w-full text-sm">
                                            <li>
                                                <Link
                                                    to="/services/e-commerce"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    E-Commerce Sites
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/services/portfolio"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    Portfolio Sites
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/services/business"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    Business Websites
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        to="/services/ui-ux"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setServicesOpen(false)}
                                    >
                                        UI/UX Design
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/seo"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setServicesOpen(false)}
                                    >
                                        SEO Optimization
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
                    </li>

                    <li>
                        <Button
                            style={{ backgroundColor: 'black', textTransform: 'none' }}
                            variant="contained"
                            className="hover:bg-gray-800 transition-colors"
                            onClick={() => navigate('/consultation')}
                        >
                            Get a Free Consultation
                        </Button>
                    </li>
                </ul>

                {/* Hamburger for Mobile */}
                <div
                    className="md:hidden text-3xl cursor-pointer hamburger-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(!menuOpen);
                    }}
                >
                    ☰
                </div>

                {/* Mobile Nav */}
                {menuOpen && (
                    <div
                        className="absolute top-full left-0 w-full bg-white shadow-md md:hidden py-4 px-6"
                        ref={mobileMenuRef}
                    >
                        <ul className="flex flex-col gap-5 text-lg poppins-semibold">
                            <li>
                                <Link to="/" onClick={() => handleMobileItemClick('/')} className="hover:text-gray-600 block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => handleMobileItemClick('/about')} className="hover:text-gray-600 block">
                                    About
                                </Link>
                            </li>

                            {/* Mobile Services Dropdown */}
                            <li>
                                <div
                                    className="flex justify-between items-center hover:text-gray-600 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setMobileServicesOpen(!mobileServicesOpen);
                                        if (!mobileServicesOpen) setMobileWebOpen(false);
                                    }}
                                >
                                    Services <span>{mobileServicesOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                                </div>
                                {mobileServicesOpen && (
                                    <ul className="pl-4 mt-2 space-y-2 text-base">
                                        <li>
                                            <div
                                                className="flex justify-between items-center hover:text-gray-600 cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setMobileWebOpen(!mobileWebOpen);
                                                }}
                                            >
                                                Website Development <span>{mobileWebOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                                            </div>
                                            {mobileWebOpen && (
                                                <ul className="pl-4 mt-2 space-y-2">
                                                    <li>
                                                        <Link
                                                            to="/services/e-commerce"
                                                            className="hover:text-gray-600 block py-1"
                                                            onClick={() => handleMobileItemClick('/services/e-commerce')}
                                                        >
                                                            E-Commerce Sites
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/services/portfolio"
                                                            className="hover:text-gray-600 block py-1"
                                                            onClick={() => handleMobileItemClick('/services/portfolio')}
                                                        >
                                                            Portfolio Sites
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/services/business"
                                                            className="hover:text-gray-600 block py-1"
                                                            onClick={() => handleMobileItemClick('/services/business')}
                                                        >
                                                            Business Websites
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <Link
                                                to="/services/ui-ux"
                                                className="hover:text-gray-600 block py-1"
                                                onClick={() => handleMobileItemClick('/services/ui-ux')}
                                            >
                                                UI/UX Design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services/seo"
                                                className="hover:text-gray-600 block py-1"
                                                onClick={() => handleMobileItemClick('/services/seo')}
                                            >
                                                SEO Optimization
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <Link to="/contact" onClick={() => handleMobileItemClick('/contact')} className="hover:text-gray-600 block">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Button
                                    style={{ backgroundColor: 'black', textTransform: 'none' }}
                                    variant="contained"
                                    fullWidth
                                    className="hover:bg-gray-800 transition-colors mt-2"
                                    onClick={() => {
                                        handleMobileItemClick('/consultation');
                                    }}
                                >
                                    Free Consultation
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
       </nav>
    );
};

export default Navbar;
