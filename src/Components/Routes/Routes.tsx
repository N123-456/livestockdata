import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "../Animals/Pages/LoginPage/Login";
import ProtectedRoute from "./ProtectedRoute";
import { AppLayout } from "../Animals/Pages/AppShell/AppLayout";
import Dashboard from "../Animals/Pages/Dashboard/Dashboard";
import LandLocationForm from "../Animals/Pages/LandLocationForm/LandLocationForm";
import ShelterForm from "../Animals/Pages/SheltersForm/ShelterForm";
import BuyAnimalsForm from "../Animals/Pages/BuyAnimalsForm/BuyAnimalsForm";
import PostBuyingForm from "../Animals/Pages/PostBuyingForm/PostBuyingForm";
import FeedingScheduleForm from "../Animals/Pages/FeedingScheduleForm/FeedingScheduleForm";
import VaccinationForm from "../Animals/Pages/VaccinationForm/VaccinationForm";
import CleaningMaintenanceForm from "../Animals/Pages/CleaningMaintenanceForm/CleaningMaintenanceForm";
import HealthMonitoringForm from "../Animals/Pages/HealthMonitoringForm/HealthMonitoringForm";
import ExpensesForm from "../Animals/Pages/ExpensesForm/ExpensesForm";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/landlocation",
          element: <LandLocationForm />,
        },
        {
          path: "/shelter",
          element: <ShelterForm />,
        },
        {
          path: "/buyanimal",
          element: <BuyAnimalsForm />,
        },
        {
          path: "/postbuying",
          element: <PostBuyingForm />,
        },
        {
          path: "/feeding",
          element: <FeedingScheduleForm />,
        },
        {
          path: "/vaccination",
          element: <VaccinationForm />,
        },
        {
          path: "/sheltercleaning",
          element: <CleaningMaintenanceForm />,
        },
        {
          path: "/healthmonitoring",
          element: <HealthMonitoringForm />,
        },
        {
          path: "/expenses",
          element: <ExpensesForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
