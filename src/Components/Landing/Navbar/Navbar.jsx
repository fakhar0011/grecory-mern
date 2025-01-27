import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="flex items-center justify-between px-4 py-2 md:px-8">

                <div className="flex items-center text-xl font-bold gap-2">
                    <div className="text-green-600 text-2xl">
                        <i className="fas fa-shopping-basket"></i>
                    </div>
                    <h6 className="text-md font-bold text-black-600">GrocerySave</h6>
                </div>


                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>


                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to="/Signin"
                        className="text-gray-700 rounded-xl hover:bg-gray-200 px-3 py-1"
                    >
                        Sign in
                    </Link>
                    <Link
                        to="/Signup"
                        className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 text-sm"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>


            {isMobileMenuOpen && (
                <div className="md:hidden bg-white px-4 py-2">
                    <Link
                        to="/Signin"
                        className="block text-gray-700 rounded-xl hover:bg-gray-200 px-3 py-2"
                    >
                        Sign in
                    </Link>
                    <Link
                        to="/Signup"
                        className="block bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 text-sm mt-2"
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
