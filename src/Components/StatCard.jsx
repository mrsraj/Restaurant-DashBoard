import React, { useState, useEffect } from "react";
import "../Styles/statCard.css";

const StatCard = ({ title, number, trend, negative }) => {
    const target = parseFloat(number.replace(/[^0-9.]/g, "")); // Extract numeric value
    const [count, setCount] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            if (current < target) {
                current += Math.ceil(target / 50); // Adjust speed of increment
                if (current > target) current = target; // Prevent overshoot
                setCount(current);
            } else {
                clearInterval(interval);
            }
        }, 30); // Faster animation

        return () => clearInterval(interval);
    }, [target]);

    return (
        <div className="card stat-card">
            <h3>{title}</h3>
            <div className="number">{number.includes("$") ? `$${count}` : count}+</div>
            <div className={`trend ${negative ? "negative" : ""}`}>{trend}</div>
        </div>
    );
};

export default StatCard;
