import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600">
      <h1>
        <Link to="/" className="text-3xl">Exercise Tracker App</Link>
      </h1>
      <div>
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/">
              Exercises
            </Link>
          </li>
          <li>
            <Link to="/create">
              Create Exercise Log
            </Link>
          </li>
          <li>
            <Link to="/user">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
