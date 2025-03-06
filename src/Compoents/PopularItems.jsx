import React from "react";
import "../Styles/PopularItems.css";
import MenuItem from "./MenuItem";

const PopularItems = () => {
    const menuItems = [
        {
            img: "/assets/burgar.jpg",
            name: "Classic Burger",
            desc: "Juicy beef patty with fresh lettuce, tomatoes, and our special sauce",
            price: "$8.99",
            rating: "★ 4.8 (120)"
        },
        {
            img: "/assets/Pepperoni_Pizza.jpg",
            name: "Pepperoni Pizza",
            desc: "Classic pizza with extra cheese and premium pepperoni slices",
            price: "$12.99",
            rating: "★ 4.9 (248)"
        },
        {
            img: "/assets/Wings_fry.jpg",
            name: "Buffalo Wings",
            desc: "Crispy wings tossed in spicy buffalo sauce with blue cheese dip",
            price: "$10.99",
            rating: "★ 4.7 (186)"
        },
    ];

    return (
        <div className="popular-items-container">
            <div className="orders-header">
                <h2>Popular Items</h2>
                <a href="#" className="view-all">View Full Menu</a>
            </div>
            <div className="popular-items">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default PopularItems;
