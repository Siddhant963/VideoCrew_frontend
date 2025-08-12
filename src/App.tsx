import type React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio";
import Differentiation from "./pages/Differentiation";
import Contact from "./pages/Contact";
import Dashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/Login"; 
import ProtectedRoute from "./components/common/ProtectedRoute";
import "./index.css";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/differentiation" element={<Differentiation />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* ✅ admin login route */}
        <Route path="/login" element={<AdminLogin />} />
        
        {/* ✅ protected admin dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Hide footer on admin & login pages */}
      {location.pathname !== "/admin" && location.pathname !== "/login" && <Footer />}
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
};

export default App;
