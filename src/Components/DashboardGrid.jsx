import React from "react";
import "../Styles/DashboardGrid.css";
import StatCard from "./StatCard";

const DashboardGrid = () => {
    const stats = [
        { title: "Today's Orders", number: "156", trend: "↑ 12% vs yesterday" },
        { title: "Total Revenue", number: "$3,240", trend: "↑ 8% vs yesterday" },
        { title: "Average Order Value", number: "$20.76", trend: "↓ 2% vs yesterday", negative: true },
        { title: "Active Orders", number: "12", trend: "↑ 4 more than usual" },
    ];

    return (
        <div className="dashboard-grid">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default DashboardGrid;
