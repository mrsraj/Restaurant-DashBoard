import React from "react";
import "../Styles/MenuItem.css";

function MenuItem({ img, name, desc, price, rating }) {

    console.log(img);
    

    return (
        <div className="menu-item">
            <img src={img} alt={name} />
            <div className="menu-item-info">
                <h4>{name}</h4>
                <p>{desc}</p>
                <div className="menu-item-footer">
                    <span className="price">{price}</span>
                    <span className="rating">{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
