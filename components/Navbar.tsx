"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClasses = (path: string) => (
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === path ? 'text-white bg-blue-600' : 'text-gray-800 hover:text-blue-600'
    }`
  );

  return (
    <nav className="w-full bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <p className="text-2xl font-bold text-blue-600">Vishesh Sachan</p>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/">
              <p className={getLinkClasses('/')}>Home</p>
            </Link>
            <Link href="/about">
              <p className={getLinkClasses('/about')}>About Me</p>
            </Link>
            <Link href="/projects">
              <p className={getLinkClasses('/projects')}>Projects</p>
            </Link>
            <Link href="/blog">
              <p className={getLinkClasses('/blog')}>Blog</p>
            </Link>
            <Link href="/contact">
              <p className={getLinkClasses('/contact')}>Contact</p>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pt-4 pb-4">
            <Link href="/">
              <p className={getLinkClasses('/')}>Home</p>
            </Link>
            <Link href="/about">
              <p className={getLinkClasses('/about')}>About Me</p>
            </Link>
            <Link href="/projects">
              <p className={getLinkClasses('/projects')}>Projects</p>
            </Link>
            <Link href="/blog">
              <p className={getLinkClasses('/blog')}>Blog</p>
            </Link>
            <Link href="/contact">
              <p className={getLinkClasses('/contact')}>Contact</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
