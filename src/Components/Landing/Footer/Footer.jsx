import React from 'react'

const Footer = () => {
    return (
        <div className="bg-green-600 text-white px-4 py-8">
            <div className="text-center max-w-lg mx-auto">

                <h2 className="text-lg sm:text-2xl font-bold mb-4">
                    Start saving on groceries today
                </h2>


                <p className="text-xs sm:text-sm mb-6 leading-5 sm:leading-6">
                    Join thousands of smart shoppers who are already saving time and money
                    with GrocerySave. No credit card required. Discover a smarter way to
                    shop for all your grocery needs today.
                </p>


                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-white text-green-600 font-medium px-3 sm:px-5 py-2 text-xs sm:text-sm rounded-lg shadow-md hover:bg-gray-100">
                        Sign Up Now - It's Free
                    </button>
                    <button className="border border-white text-white font-medium px-3 sm:px-5 py-2 text-xs sm:text-sm rounded-lg hover:bg-green-500">
                        Schedule a Demo
                    </button>
                </div>
            </div>
        </div>




    );
}

export default Footer