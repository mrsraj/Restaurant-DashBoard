import React from "react";
import "../Styles/Dashboard.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardGrid from "./DashboardGrid";
import OrdersList from "./OrdersList";
import PopularItems from "./PopularItems";

const Dashboard = () => (
    <div className="app">
        <Sidebar />
        <main className="main-content">
            <Header />
            <DashboardGrid />
            <OrdersList />
            <PopularItems />
        </main>
    </div>
);

export default Dashboard;
