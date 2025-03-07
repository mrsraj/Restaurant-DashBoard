import React from "react";
import "../Styles/OrdersList.css";
import OrderItem from "./OrderItem";

const OrdersList = () => {
    const orders = [
        { id: "1234", items: "2x Burger, 1x Fries, 1x Coke", status: "Pending" },
        { id: "1233", items: "1x Pizza, 2x Wings, 2x Sprite", status: "Preparing" },
        { id: "1232", items: "3x Tacos, 1x Nachos, 1x Pepsi", status: "Completed" },
    ];

    return (
        <div className="orders-list">
            <div className="orders-header">
                <h2>Recent Orders</h2>
                <a href="#" className="view-all">View All Orders</a>
            </div>
            {orders.map((order) => (
                <OrderItem key={order.id} {...order} />
            ))}
        </div>
    );
};

export default OrdersList;
