import React from 'react';
import "./featured.scss";


// img and data src
import {roomHome} from "../../Dummy";

const Featured = () => {
    return (
        <div className="featured">
                {
                  roomHome.map((val)=>(
                    <div className="featuredItem">
                      <img src={val.cover} alt="" />
                      <h1>{val.title}</h1>
                      <h2>{val.number}</h2>
                    </div>
                  ))  
                }
           
        </div>
    );
};

export default Featured;