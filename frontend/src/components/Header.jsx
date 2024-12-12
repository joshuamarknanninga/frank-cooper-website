// frontend/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Ensure this path is correct

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="Frank Cooper Logo" className="h-10 mr-3" />
          <span className="text-xl font-bold">Frank Cooper</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/podcast" className="hover:text-blue-500">
                Podcast
              </Link>
            </li>
            <li>
              <Link to="/books" className="hover:text-blue-500">
                Books
              </Link>
            </li>
            <li>
              <Link to="/classes" className="hover:text-blue-500">
                Classes
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-blue-500">
                Shop
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
