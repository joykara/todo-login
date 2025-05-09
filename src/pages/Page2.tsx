import React from "react";

export const Page2 = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map(n => (
                <div key={n} className="bg-gray-100 p-4 rounded shadow">
                    <h3 className="text-lg font-bold">Card {n}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            ))}
        </div>
    );
};