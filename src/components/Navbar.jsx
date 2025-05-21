import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Navbar = () => {
    // Mobile menu state
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Desktop dropdown states
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isWebOpen, setIsWebOpen] = useState(false);
    
    // Mobile dropdown states (separate to prevent conflicts)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileWebOpen, setMobileWebOpen] = useState(false);
    
    // Refs for dropdown menus
    const servicesDropdownRef = useRef(null);
    const webDropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);
    
    // Mobile menu specific handler
    const handleMobileItemClick = (page) => {
        console.log(`Navigate to ${page}`);
        setMenuOpen(false);
    };

    // Handle clicks outside of dropdown menus
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Desktop navigation dropdown management
            if (servicesDropdownRef.current && 
                !servicesDropdownRef.current.contains(event.target) && 
                !event.target.classList.contains('services-toggle')) {
                setServicesOpen(false);
                setIsWebOpen(false);
            }
            
            // Mobile menu management
            if (menuOpen && 
                mobileMenuRef.current && 
                !mobileMenuRef.current.contains(event.target) && 
                !event.target.classList.contains('hamburger-icon')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    // Reset mobile dropdowns when mobile menu closes
    useEffect(() => {
        if (!menuOpen) {
            // Optional: reset mobile dropdown states when menu closes
            // Uncomment if you want dropdowns to reset when mobile menu closes
            // setMobileServicesOpen(false);
            // setMobileWebOpen(false);
        }
    }, [menuOpen]);

    // Toggle for desktop services dropdown
    const toggleServices = (e) => {
        e.stopPropagation();
        setServicesOpen(!servicesOpen);
        if (!servicesOpen) {
            setIsWebOpen(false);
        }
    };

    // Toggle for desktop web development dropdown
    const toggleWeb = (e) => {
        e.stopPropagation();
        setIsWebOpen(!isWebOpen);
    };

    return (
        <div className="select-none flex justify-between items-center w-full px-5 py-3 shadow-lg relative z-50 bg-white">
            {/* Logo */}
            <img src="./logo2.webp" className="sm:w-36 object-contain w-24 mt-[-45px] mb-[-45px]" alt="Logo" />

            {/* Desktop Nav */}
            <ul className="hidden md:flex poppins-semibold gap-8 items-center text-lg cursor-pointer relative">
                <li className="hover:text-gray-600 transition-colors">Home</li>
                <li className="hover:text-gray-600 transition-colors">About</li>

                {/* Services with Dropdown */}
                <li className="relative" ref={servicesDropdownRef}>
                    <div
                        className="flex items-center gap-1 hover:text-gray-600 transition-colors services-toggle"
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

                                {/* Nested Dropdown */}
                                {isWebOpen && (
                                    <ul className="mt-2 bg-white border rounded shadow-md w-full text-sm">
                                        <li className="px-4 py-2 hover:bg-gray-100">E-Commerce Sites</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Portfolio Sites</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Business Websites</li>
                                    </ul>
                                )}
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">UI/UX Design</li>
                            <li className="px-4 py-2 hover:bg-gray-100">SEO Optimization</li>
                        </ul>
                    )}
                </li>

                <li className="hover:text-gray-600 transition-colors">Contact</li>
                <Button 
                  style={{ backgroundColor: 'black', textTransform: 'none' }} 
                  variant="contained"
                  className="hover:bg-gray-800 transition-colors"
                >
                    Get a Free Consultation
                </Button>
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
                        <li className="hover:text-gray-600" onClick={() => handleMobileItemClick('Home')}>Home</li>
                        <li className="hover:text-gray-600" onClick={() => handleMobileItemClick('About')}>About</li>

                        {/* Mobile Services Dropdown */}
                        <li>
                            <div
                                className="flex justify-between items-center hover:text-gray-600"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileServicesOpen(!mobileServicesOpen);
                                    if (!mobileServicesOpen) {
                                        // Auto-close web dropdown when closing services
                                        setMobileWebOpen(false);
                                    }
                                }}
                            >
                                Services <span>{mobileServicesOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                            </div>
                            {mobileServicesOpen && (
                                <ul className="pl-4 mt-2 space-y-2 text-base">
                                    <li>
                                        <div
                                            className="flex justify-between items-center hover:text-gray-600"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setMobileWebOpen(!mobileWebOpen);
                                            }}
                                        >
                                            Website Development <span>{mobileWebOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                                        </div>
                                        {mobileWebOpen && (
                                            <ul className="pl-4 mt-2 space-y-2">
                                                <li className="hover:text-gray-600 py-1" onClick={() => handleMobileItemClick('E-Commerce')}>E-Commerce Sites</li>
                                                <li className="hover:text-gray-600 py-1" onClick={() => handleMobileItemClick('Portfolio')}>Portfolio Sites</li>
                                                <li className="hover:text-gray-600 py-1" onClick={() => handleMobileItemClick('Business')}>Business Websites</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li className="hover:text-gray-600 py-1" onClick={() => handleMobileItemClick('UI/UX')}>UI/UX Design</li>
                                    <li className="hover:text-gray-600 py-1" onClick={() => handleMobileItemClick('SEO')}>SEO Optimization</li>
                                </ul>
                            )}
                        </li>

                        <li className="hover:text-gray-600" onClick={() => handleMobileItemClick('Contact')}>Contact</li>
                        <Button
                            style={{ backgroundColor: 'black', textTransform: 'none' }}
                            variant="contained"
                            fullWidth
                            className="hover:bg-gray-800 transition-colors mt-2"
                        >
                            Free Consultation
                        </Button>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;