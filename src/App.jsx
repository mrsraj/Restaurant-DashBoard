import React from "react";
import "./Styles/Global.css";
import Dashboard from "./Components/Dashboard";
import { DashboardProvider } from "./Context/DashboardContext";

const App = () => (
  <DashboardProvider>
    <Dashboard />
  </DashboardProvider>
);

export default App;
