import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length > 8;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEmailValid && isPasswordValid) navigate("/dashboard");
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="border h-12 p-2 w-full mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="border p-2 w-full mb-4"
                />
                <button
                    type="submit"
                    disabled={!isEmailValid || !isPasswordValid}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Login
                </button>
            </form>
        </>
    );
};