import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import Homepage from "./routes/home/Homepage";
import LoginPage from "./routes/login/LoginPage";
import PlayerPage from "./routes/player/PlayerPage";
import SignInPage from "./routes/signin/SignInPage";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";


function App() {
  const naviagte = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        naviagte("/");
      } else {
        console.log("Logged Out");
        naviagte("/sign-in");
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/player/:id" element={<PlayerPage />} />
      </Routes>
    </div>
  );
}

export default App;
