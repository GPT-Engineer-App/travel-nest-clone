import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-red-500 font-bold text-2xl">Airbnb</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
            <li><Link to="/my-trips" className="text-gray-600 hover:text-gray-900">My Trips</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
