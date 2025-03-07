import React from "react";
import "../Styles/header.css";

import { useDashboard } from "../Context/DashboardContext";

const Header = () => {
    const { user } = useDashboard();

    return (
        <header className="header">
            <h1>Dashboard Overview</h1>
            <div className="user-info">
                <span>March 5, 2025</span>
                <div className="user-avatar">{user.avatar}</div>
            </div>
        </header>
    );
};

export default Header;
