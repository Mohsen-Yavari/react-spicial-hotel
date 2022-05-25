import React from 'react';
import "./FeaturedProperty.scss";
import {featuredProperty} from "../../Dummy";

const FeaturedProperty = () => {
    return (
        <div className="fb container">
            {featuredProperty.map((val)=>(
                <div className="fbItem">
                <img src={val.cover} alt="" />
                <span className="fpName">{val.name}</span>
                <span className="fpCity">{val.city}</span>
                <span className="fpPrice">{val.price}</span>
                <div className="faRating">
                <button>9</button>
                <span>رزرف</span>
                </div>
                </div>
            ))}
            
        </div>
    );
};

export default FeaturedProperty;