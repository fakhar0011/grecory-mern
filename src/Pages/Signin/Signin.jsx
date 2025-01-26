import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // Includes cookies in the request
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Invalid email or password");
            }

            const data = await response.json();

            // Store the token in localStorage for authentication
            localStorage.setItem("token", data.token);

            // Navigate to the dashboard
            navigate("/dashbord");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col items-center mb-6">
                    <div className="text-green-600 text-5xl mb-4">
                        <i className="fas fa-shopping-basket"></i>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                                <i className="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Sign in
                    </button>
                </form>
                {error && (
                    <p className="mt-4 text-sm text-center text-red-600">
                        {error}
                    </p>
                )}
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/Signup" className="text-green-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
