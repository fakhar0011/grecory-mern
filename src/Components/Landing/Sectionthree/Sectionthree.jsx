import React, { useState } from 'react'
import { CiShare2 } from "react-icons/ci";
import { TbShoppingCartCancel } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { CiMobile1 } from "react-icons/ci";
import { PiBellLight } from "react-icons/pi";
import { TbLayoutBottombarCollapse } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { TbArrowZigZag } from "react-icons/tb";

const Sectionthree = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
            id: 1,
            title: "Create Lists",
            description: "Create custom shopping lists for different stores or occasions.",
            details: [
                {
                    icon: <TbShoppingCartCancel />
                    , text: "Organize by store"
                },
                { icon: <CiShare2 />, text: "Share with family" },
                { icon: <i class="fa-regular fa-bell"></i>, text: "Set reminders" },
            ],
        },
        {
            id: 2,
            title: "Add Items",
            description: "Easily add items to your lists with quick search and suggestions.",
            details: [
                {
                    icon: <CiSearch />
                    , text: "Smart search"
                },
                {
                    icon: <PiIdentificationBadgeLight />
                    , text: "Auto-categorize"
                },
                {
                    icon: <CiMobile1 />
                    , text: "Voice input"
                },
            ],
        },
        {
            id: 3,
            title: "Track Prices",
            description: "Monitor price changes and find the best deals.",
            details: [
                {
                    icon: <PiBellLight />
                    , text: "Price alerts"
                },
                {
                    icon: <TbLayoutBottombarCollapse />
                    , text: "Compare stores"
                },
                {
                    icon: <PiIdentificationBadgeLight />
                    , text: "Deal finder"
                },
            ],
        },
        {
            id: 4,
            title: "Save Money",
            description: "Use insights to save on your grocery shopping.",
            details: [
                {
                    icon: <CiClock2 />
                    , text: "Track savings"
                },
                {
                    icon: <TbArrowZigZag />
                    , text: "Spending insights"
                },
                { icon: <PiBellLight />, text: "Budget alerts" },
            ],
        },
    ];
    return (
        <div className="bg-gray-50 py-10">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">How GrocerySave Works</h2>
                <p className="text-gray-600">Get started in minutes and save hours every week</p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 px-4">
                {/* Steps Navigation */}
                <div className="sm:col-span-1">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            onClick={() => setActiveStep(step.id)}
                            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeStep === step.id
                                ? "bg-green-50 border-l-4 border-emerald-500 text-green-800"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            <div className="flex items-center">
                                <span className="text-xl mr-2">{activeStep === step.id ? "✅" : "⬜"}</span>
                                <h3 className="font-medium">Step {step.id} → {step.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Step Details */}
                <div className="sm:col-span-3 bg-white p-6 rounded-lg shadow-md">
                    {steps.map((step) => (
                        activeStep === step.id && (
                            <div key={step.id}>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-600 mb-4">{step.description}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {step.details.map((detail, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm"
                                        >
                                            <span className="text-2xl mr-3">{detail.icon}</span>
                                            <p className="text-gray-700">{detail.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                    <div className="flex justify-between mt-6">
                        {activeStep > 1 && (
                            <button
                                onClick={() => setActiveStep((prev) => prev - 1)}
                                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
                            >
                                Previous Step
                            </button>
                        )}
                        {activeStep < steps.length && (
                            <button
                                onClick={() => setActiveStep((prev) => prev + 1)}
                                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                            >
                                Next Step
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectionthree;