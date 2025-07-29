import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import AppointmentPage from "./pages/AppointmentPage";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/doctor" element={<DoctorDashboard />} />
      <Route path="/patient" element={<PatientDashboard />} />
      <Route path="/appointments" element={<AppointmentPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
