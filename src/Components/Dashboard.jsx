import React from "react";
import "../Styles/Dashboard.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardGrid from "./DashboardGrid";
import OrdersList from "./OrdersList";
import PopularItems from "./PopularItems";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";

const Dashboard = () => (
    <div className="app">
        <Sidebar />
        <main className="main-content">
            <Header />
            <ImageSlider/>
            <DashboardGrid />
            <OrdersList />
            <PopularItems />
            <Footer/>
        </main>
    </div>
);

export default Dashboard;
