import React from 'react'
import { useHref, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-white p-2 shadow-md">
            {/* Left Section - Logo */}
            <div className="flex items-center justify-start">
                <div className="flex items-center text-xl font-bold gap-2 ">
                <div className="text-green-600 text-2xl ml-8">
                        <i className="fas fa-shopping-basket"></i>
                    </div>
                    <h6 className="text-md font-bold text-black-600">GrocerySave</h6>
                </div>
            </div>


            {/* Right Section - Buttons */}
            <div className="flex items-center space-x-4 mr-16">
                <Link to="/Signin" className="text-gray-700 hover:text-gray-600 rounded-xl">
                    Sign in
                </Link>
                <Link to="/Signup" className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 text-sm">
                    Sign Up
                </Link>
            </div>
        </nav>

    )
}

export default Navbar