import "./App.css";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Newtask from "./components/Newtask";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newtask" element={<Newtask />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
