import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length > 8;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEmailValid && isPasswordValid) {
            toast.success("Login successful!");
            navigate("/dashboard");
        } else if (!isEmailValid) {
            toast.error("Please enter a valid email address.");
        }
        else if (!isPasswordValid) {
            toast.error("Password must be at least 8 characters long.");
        }
        else {
            toast.error("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen '>
            <div className="bg-primary text-white shadow-md rounded-md p-8 mb-4 w-full max-w-sm">
                <h1 className="text-2xl text-center font-bold mb-4">Login</h1>
                <p className="text-center mb-4">Please enter your credentials</p>
                <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto w-full">
                    <label htmlFor="email">Enter email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                        className="border text-black rounded mt-1 p-2 w-full mb-4"
                    />
                    <label htmlFor="password">Enter password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                        className="border text-black rounded mt-1 p-2 w-full mb-6"
                    />
                    <button
                        type="submit"
                        className={`px-4 py-2 mx-auto w-full rounded transition duration-300 ease-in-out ${isEmailValid && isPasswordValid
                            ? 'bg-purple-500 hover:bg-pink-600 cursor-pointer'
                            : 'bg-gray-400 cursor-not-allowed'
                            }`}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};