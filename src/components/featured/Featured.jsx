import React from 'react';
import "./featured.scss";


// img and data src
import {roomHome} from "../../Dummy";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={room1} alt="" />
                <h1>دوبلکس</h1>
                <h2>شماره 112</h2>
            </div>
        </div>
    );
};

export default Featured;