
export const Page2 = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-6 gap-6">
            {[1, 2, 3].map(n => (
                <div key={n} className="bg-gradient-to-r from-indigo-200/20 to-pink-100/20 p-4 rounded shadow">
                    <h3 className="text-lg font-bold">Card {n}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            ))}
        </div>
    );
};