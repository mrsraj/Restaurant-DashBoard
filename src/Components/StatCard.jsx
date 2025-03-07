import React from "react";
import "../Styles/statCard.css";

const StatCard = ({ title, number, trend, negative }) => (
    <div className="card stat-card">
        <h3>{title}</h3>
        <div className="number">{number}</div>
        <div className={`trend ${negative ? "negative" : ""}`}>{trend}</div>
    </div>
);

export default StatCard;
