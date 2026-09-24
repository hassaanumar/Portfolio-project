import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AdminPanel from "./components/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Private admin page */}
        <Route path="/admin/login" element={<AdminLogin />} />
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  }
/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;


