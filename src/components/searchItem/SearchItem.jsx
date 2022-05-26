import React from 'react';
import "./searchItem.scss";
import p1 from "../../img/p1.avif";

const SearchItem = () => {
    return (
        <div className="searchItem">
        <img
          src={p1}
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">لورم ایپسوم متن</h1>
          <span className="siDistance">لورم ایپسوم متن</span>
          <span className="siTaxiOp">لورم ایپسوم </span>
          <span className="siSubtitle">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </span>
          <span className="siFeatures">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت 
          </span>
          
        </div>
        <div className="siDetails">
          <div className="siRating d-flex justify-content-between">
            <span>موافقت</span>
            <button className="btn btn-primary">8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">1200000</span>
            <span className="siTaxOp">لورم ایپسوم متن</span>
            <button className="btn btn-success">لورم ایپسوم متن</button>
          </div>
        </div>
      </div>
    );
};

export default SearchItem;