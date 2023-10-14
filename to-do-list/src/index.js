import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "./contexts/AuthContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import ForgotPassword from "./auth/ForgotPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
