import React from "react";
import "../Styles/sidebar.css";

const Sidebar = () => {
    const menuItems = [
        { icon: "📊", label: "Dashboard", active: true },
        { icon: "📦", label: "Orders" },
        { icon: "🍽️", label: "Menu" },
        { icon: "👥", label: "Customers" },
        { icon: "📈", label: "Analytics" },
        { icon: "⚙️", label: "Settings" },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <div className="logo-box">📊</div>
                <h2>FoodDash</h2>
            </div>
            <nav>
                <ul className="nav-menu">
                    {menuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a href="#" className={`nav-link ${item.active ? "active" : ""}`}>
                                <div>{item.icon}</div>
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
