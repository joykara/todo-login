import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="w-full">
      <nav className="bg-purple-50 p-3 flex justify-end pr-10 w-full gap-8">
        <Link className="bg-white px-3 py-1 hover:bg-primary rounded hover:text-white" to="/dashboard/home">Home</Link>
        <Link className="bg-white px-3 py-1 hover:bg-primary rounded hover:text-white" to="/dashboard/page2">Page 2</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
