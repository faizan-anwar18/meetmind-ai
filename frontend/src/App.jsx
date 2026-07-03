import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Meetings from "./pages/Meetings";
import MeetingDetails from "./pages/MeetingDetails";
import Record from "./pages/Record";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/meetings" element={<Meetings />} />
      <Route path="/meeting" element={<MeetingDetails />} />
      <Route path="/record" element={<Record />} />
    </Routes>
  );
}