import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Failed to create account.");
                return;
            }
            const data = await response.json();
            if (data.token) {
                localStorage.setItem("token", data.token);
            }
            navigate("/dashbord");
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-200">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center text-green-800 mb-4">
                    Create your account
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="fullName"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Full name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-300"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-300"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-300"
                            placeholder="********"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Confirm password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-300"
                            placeholder="********"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                    >
                        Create account
                    </button>
                </form>
                {error && (
                    <p className="mt-4 text-sm text-center text-red-600">
                        {error}
                    </p>
                )}
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/Signin" className="text-green-600 hover:underline">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}
export default Signup;