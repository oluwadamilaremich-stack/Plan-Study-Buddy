import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import OnboardingFlow from "./pages/OnboardingFlow";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DefaultLayout from "./pages/layout/DefaultLayout";
import AuthLayout from "./pages/layout/AuthLayout";
import AccountSetup from "./pages/AccountSetup";
import TopicSetup from "./pages/TopicSetup";
import LearningStyles from "./pages/LearningStyles";
import SessionSetup from "./pages/SessionSetup";
import PaceSetup from "./pages/PaceSetup";
import PlanReady from "./pages/PlanReady";
import DashboardLayout from "./pages/layout/DashboardLayout";
import HomeDash from "./pages/HomeDash";
import StudyPlan from "./pages/StudyPlan";
import AiAssistant from "./pages/AiAssistant";
import Profile from "./pages/Proflie";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings"; 
import StudySession from "./pages/StudySession";
import SubjectDetail from "./pages/SubjectDetail";
import ProfSetupLayout from "./pages/layout/ProfSetupLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },

    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomeDash />,
      },
      {
        path: "studyplan",
        element: <StudyPlan />,
      },
      {
        path: "aiassistant",
        element: <AiAssistant />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit", // This creates the /dashboard/profile/edit path
        element: <EditProfile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "studysession",
        element: <StudySession />,
      },
      {
        path: "subjectdetail/:subjectId", 
        element: <SubjectDetail />,
      },
    ],
  },
    {
    path: "onboarding",
    element: <OnboardingFlow />,
    },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    element: <ProfSetupLayout />,
    children: [
      {
    path: "accountsetup",
    element: <AccountSetup />,
  },
  {
    path: "topicsetup",
    element: <TopicSetup />,
  },
  {
    path: "learningstyles",
    element: <LearningStyles />
  },
  {
    path: "sessionsetup",
    element: <SessionSetup />
  },
  {
    path: "pacesetup",
    element: <PaceSetup />
  },
    ]
  },
  {
    path: "planready",
    element: <PlanReady />
  }
]);