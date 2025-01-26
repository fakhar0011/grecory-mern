import React from 'react'

const MainSection = () => {
    return (
        <div>
            <section className="bg-green-50 py-16">
                <div className="container mx-auto text-center px-4">
                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-gray-900">
                        Smart Grocery Shopping,{" "}
                        <span className="text-green-600">Made Simple</span>
                    </h1>

                    {/* Subheading */}
                    <p className="mt-4 text-gray-600 text-sm text-wrap">
                        Organize your grocery lists, track prices, and save money with our
                        intelligent <br /> shopping assistant. Join over 50,000 smart shoppers
                        saving time and money <br /> every day.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300">
                            Get Started Free
                        </button>
                        <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-300">
                            Watch Demo
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-8 flex justify-center items-center gap-8 text-gray-700 text-sm">
                        <div className="flex items-center">
                            <span className="text-yellow-500 text-xl mr-2">⭐</span>
                            4.9/5 rating
                        </div>
                        <div className="flex items-center">
                            <span className="text-green-600 text-xl mr-2"><i className="fa-regular fa-user"></i></span>
                            50K+ users
                        </div>
                        <div className="flex items-center">
                            <span className="text-green-600 text-xl mr-2"><i class="fa-solid fa-lock"></i></span>
                            Secure & Private
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainSection