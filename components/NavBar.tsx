'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SakuraIcon from "@/public/images/sakura.webp";
import SummerFestIcon from "@/public/images/logos/summer-fest-icon.png";
import { Menu } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const body = document.body;
        if (isMobileMenuOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'visible';
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            body.style.overflow = 'visible';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className="w-full h-12 z-40 fixed px-4 bg-primary-red">
                <div className='flex h-full justify-between md:max-w-screen-xl md:mx-auto'>

                    <button className="md:hidden flex items-center gap-x-2">
                        <Menu className='stroke-white' onClick={toggleMobileMenu} />
                        <Link className="flex items-center space-x-2 group" href="/">
                            <img src={SakuraIcon.src} alt="Sakura icon" className="h-10 w-10 transition-transform duration-300 group-hover:rotate-45" />
                            <img src={SummerFestIcon.src} alt="Summer Festival icon" className="h-12 " />
                        </Link>
                    </button>

                    <ul className="hidden md:flex space-x-6 items-center">
                        <Link className="flex items-center space-x-2 group" href="/">
                            <img src={SakuraIcon.src} alt="Sakura icon" className="h-10 w-10 transition-transform duration-300 group-hover:rotate-45" />
                            <img src={SummerFestIcon.src} alt="Summer Festival icon" className="h-12 " />
                        </Link>
                    </ul>
                    <ul className='hidden md:flex space-x-10 items-center text-white font-semibold'>
                        <li>
                            <Link href="/#about" className='hover:text-primary-yellow ease-in-out transition-colors duration-150'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/floorplan" className='hover:text-primary-yellow ease-in-out transition-colors duration-150'>
                                Floorplan
                            </Link>
                        </li>
                        <li>
                            <Link href="/schedule" className='hover:text-primary-yellow ease-in-out transition-colors duration-150'>
                                Schedule
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className='hover:text-primary-yellow ease-in-out transition-colors duration-150'>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav >

            <div className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu}></div>

            <div className={`transform top-0 left-0 min-w-64 bg-white p-5 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-40 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className='flex flex-col gap-2 text-lg'>
                    <li className="mb-2">
                        <Link onClick={toggleMobileMenu} href="/">
                            <img src={SummerFestIcon.src} alt="Summer Festival icon" className="h-10 " />
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileMenu} href="/#about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileMenu} href="/floorplan">
                            Floorplan
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileMenu} href="/schedule">
                            Schedule
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileMenu} href="/faq">
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
