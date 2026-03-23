import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import OnboardingFlow from "./pages/OnboardingFlow";
import AuthLayout from "./pages/layout/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DefaultLayout from "./pages/layout/DefaultLayout";
import { router } from "./routes";

const Layout = () => {
  const location = useLocation();

  const hideLayout = location.pathname === "/onboarding";

  return (
    <>

    </>
  );
};

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;