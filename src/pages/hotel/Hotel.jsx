import React from 'react';
import "./hotel.scss";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MailList from "../../components/mailList/MailList";
import {Property} from "../../Dummy";

const Hotel = () => {
    return (
        <div>
           <Navbar />
           <Header type="list" /> 
           <div className="container hotelContainer">
               <div className="hotelWrapper">
                   <h1 className="hotelTitle">هتل مجلل</h1>
                   <div className="hotelAdress">
                    <i class="ri-map-pin-line"></i>
                    <span>تهران - میدان ازادی</span>
                   </div>
                   <h2>لورم ایپسوم متن ساختگی با</h2>
                   <h3>لورم ایپسوم متن ساختگی با تولید سادگی</h3>
                   <div className="hotelImg ">
                    {Property.map((val)=>(
                        <div className="hotelImgWrapper">
                            <img src={val.cover} alt="" />
                        </div>
                    ))}
                   </div>
                   <div className="hotelDetails">
                       <div className="hotelDetailsText">
                           <h1 className="hotelTitle">لورم ایپسوم متن ساختگی با تولید</h1>
                           <p>
                           لور
                           م ایپسوم متن ساختگی با تولید سا
                           دگی نامفهوم از صنعت چاپ و با اس
                           
                           تفاده از طراحان گرافیک است چاپ
                           گرها و متون بلکه روزنامه و مجله
                            در ستون و سطرآنچنان که لازم است 
                           و برای شرایط فعلی تکنولوژی مور
                           د نیاز و کاربردهای متنوع با هدف 
                           بهبود ابزارهای کاربردی می باشد
                           </p>
                       </div>
                       <div className="hotelDetailsPrice">
                           <h1>لورم ایپسوم</h1>
                           <span>
                           لورم ایپسوم متن ساختگی با 
                           تولید سادگی نامفهوم از صنعت 
                           </span>
                           <br />
                           <h5>مجموع 12844545</h5>
                           <button className="btn btn-primary">رزرف</button>
                       </div>
                   </div>
               </div>
               
           </div>
           <MailList />
        </div>
    );
};

export default Hotel;