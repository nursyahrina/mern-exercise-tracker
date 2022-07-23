import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="container mx-auto py-3 px-8 max-w-[1000px] min-h-[80px] flex flex-wrap justify-between items-center bg-gradient-to-r from-blue-900 via-gray-900 to-slate-900 rounded-b-lg drop-shadow-lg">
      <h1 className="text-4xl text-[#fffff9] pr-8">
        <Link to="/">Exercise Tracker</Link>
      </h1>
      <div>
        <ul className="py-4 flex sm:flex-row flex-col justify-start items-start">
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
