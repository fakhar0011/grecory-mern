import React from 'react'

const Sectionfour = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Busy Mom",
            text: "GrocerySave has completely transformed how I shop for my family. I save both time and money every week!",
            initial: "S",
        },
        {
            name: "Mike Chen",
            role: "Budget Conscious",
            text: "The price tracking feature is amazing. I've saved over $200 in the past month alone.",
            initial: "M",
        },
        {
            name: "Emily Davis",
            role: "Health Enthusiast",
            text: "I love how I can organize my shopping lists by category. Makes healthy shopping so much easier!",
            initial: "E",
        },
    ];
    return (
        <div className="bg-green-50 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800">Loved by Shoppers</h2>
                <p className="text-gray-600 mt-2">
                    See what our users have to say about GrocerySave
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 text-green-700 font-bold w-12 h-12 flex items-center justify-center rounded-full">
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mt-4">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sectionfour