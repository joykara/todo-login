import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <nav className="bg-gray-200 p-4 flex gap-4">
        <Link to="/dashboard/home">Home</Link>
        <Link to="/dashboard/page2">Page 2</Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};
