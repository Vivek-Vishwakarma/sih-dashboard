import "./App.css";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Newtask from "./components/Newtask";
import AdminLog from "./components/AdminLog";
import AdminDash from "./components/AdminDash";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newtask" element={<Newtask />} />
          <Route path="/admin" element={<AdminLog />} />
          <Route path="/admin/dashboard" element={<AdminDash />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
