import React from 'react'

const Sectionfive = () => {
    return (
        <section className="bg-green-50 py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-gray-800">Calculate Your Savings</h2>
                <p className="text-gray-600 mt-4 text-lg">
                    See how much you could save with GrocerySave
                </p>
                <div className="bg-white w-full sm:w-3/4 lg:w-1/2 mx-auto mt-8 p-6 rounded-2xl shadow-xl">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="text-center sm:text-left mb-6 sm:mb-0">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Monthly Grocery Spend
                            </h3>
                            <p className="text-4xl font-bold text-green-600 mt-2">$600</p>
                            <p className="text-sm text-gray-500 mt-1">Average household spend</p>
                        </div>
                        <div className="text-center sm:text-left mb-6 sm:mb-0">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Potential Savings
                            </h3>
                            <p className="text-4xl font-bold text-green-600 mt-2">$180</p>
                            <p className="text-sm text-gray-500 mt-1">30% average savings</p>
                        </div>
                    </div>
                    <button className="bg-green-600 w-full text-white rounded-lg px-8 py-3 text-lg shadow-md hover:bg-green-700 mt-6">
                        Start Saving Today
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Sectionfive