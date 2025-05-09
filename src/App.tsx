import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Page2 } from "./pages/Page2";
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </>
  );
};

export default App;
