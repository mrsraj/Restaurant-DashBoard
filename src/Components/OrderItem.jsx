import React from "react";
import "../Styles/OrderItem.css";

const OrderItem = ({ id, items, status }) => (
    <div className="order-item">
        <div className="order-info">
            <h4>Order #{id}</h4>
            <p>{items}</p>
        </div>
        <span className={`order-status status-${status.toLowerCase()}`}>{status}</span>
    </div>
);

export default OrderItem;
