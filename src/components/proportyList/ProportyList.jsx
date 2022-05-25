import React from 'react';
import "./proportyList.scss";
import {Property} from "../../Dummy";

const ProportyList = () => {
    return (
        <div className="pList container d-flex justify-content-between">
            {
                Property.map((val)=>(
                    <div className="pListItem ">
                        <img src={val.cover} className="PlistImg" />
                        <h1>{val.title}</h1>
                        <h2>{val.number}</h2>
                    </div>
                ))
            }
           
            
        </div>
    );
};

export default ProportyList;