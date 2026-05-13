import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import OnboardingWelcome from "./pages/onboarding/Welcome";
import OnboardingUpload from "./pages/onboarding/Upload";
import OnboardingParams from "./pages/onboarding/Params";
import OnboardingStyle from "./pages/onboarding/Style";
import OnboardingLoading from "./pages/onboarding/Loading";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/onboarding",
    children: [
      { path: "welcome", Component: OnboardingWelcome },
      { path: "upload", Component: OnboardingUpload },
      { path: "params", Component: OnboardingParams },
      { path: "style", Component: OnboardingStyle },
      { path: "loading", Component: OnboardingLoading },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);
