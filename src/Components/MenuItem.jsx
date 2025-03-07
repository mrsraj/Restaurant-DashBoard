import React from "react";
import style from '../Styles/MenuItem.module.css'

function MenuItem({ img, name, desc, price, rating, discount }) {

    return (
        <div className={style.menu_item}>
           <span className={style.offers}>{`${discount}% off`}</span>
            <img src={img} alt={name} />
            <div className={style.menu_item_info}>
                <h4>{name}</h4>
                <p>{desc}</p>
                <div className={style.menu_item_footer}>
                    <span className={style.price}>{price}</span>
                    <span className={style.rating}>{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
