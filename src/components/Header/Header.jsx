import React,{useState } from 'react';

import "./header.scss";

//for date and clender
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    return (
        <div className="header bg-primary text-light d-flex justify-content-center">
            <div className="headerContainer">
            <div className="headerList d-flex ">
                <div className="headerListItem active">
                <i class="ri-hotel-bed-fill"></i>
                <span>ماندن</span>
                </div>
                <div className="headerListItem">
                <i class="ri-flight-takeoff-line"></i>
                <span>پرواز</span>
                </div>
                <div className="headerListItem">
                <i class="ri-taxi-line"></i>
                <span>تاکسی</span>
                </div>
                <div className="headerListItem">
                <i class="ri-hotel-bed-fill"></i>
                <span>جاذبه ها</span>
                </div>
                <div className="headerListItem">
                <i class="ri-taxi-line"></i>
                <span>تاکسی فرودگاه</span>
                </div>
            </div>
            <h1 className="HeaderTitle">یک عالمه تخفیف با ما</h1>
            <p className="headerDesc">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          <button type="button" className="btn btn-info">ورود /ثبتنام</button>
            <div className="headerSearch">
            <div className="headSearchItem">
                <i class="ri-hotel-bed-fill"></i>
                <input 
                type="text" 
                className="headerSearchInput" 
                placeholder="کجا میخای بری؟" />
                
                </div>
                <div className="headSearchItem">
                <i class="ri-calendar-event-line"></i>
                <span className="headerSearchText">زمان و تاریخ</span>
                {/* //datevrenge for clender */}
                <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                />
                </div>
                <div className="headSearchItem">
                <i class="ri-group-fill"></i>
                <span className="headerSearchText">دو بزرگسال و یک بچه 1اتاق</span>

                
                </div>
              
                <div className="headSearchItem">
               <button type="button" className="btn btn-primary">جستجو</button>


                </div>
              

            </div>

            </div>
        </div>
    );
};

export default Header;