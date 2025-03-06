import React from "react";
import "./Styles/global.css";
import Dashboard from "./Compoents/Dashboard";
import { DashboardProvider } from "./Context/DashboardContext";

const App = () => (
  <DashboardProvider>
    <Dashboard />
  </DashboardProvider>
);

export default App;
