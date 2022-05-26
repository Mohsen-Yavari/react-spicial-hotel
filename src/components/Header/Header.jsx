import React,{useState } from 'react';
import {Link} from "react-router-dom";

import "./header.scss";

//for date and clender
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    //for date
    const [destination,setDestination] = useState("");
    const [opanDate,setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      //for room 
      const [openOptions,setOpenOptions] = useState(false);
      const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1,
      });

      const navigate = useNavigate();

      //for r0om negative our positive
      const handelOption = (name,operation)=>{
        setOptions((prev)=>{
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 :options[name] - 1,
            }
        })
      };
      //useNavigate for serch on hotels bar
  

      const handelSearch = () =>{
        navigate("/hotels",{ state:{destination,date,options} })
      }
      
    return (
        <div className="header bg-primary text-light d-flex justify-content-center">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList d-flex ">
           
                <div className="headerListItem active">
                
                <i class="ri-home-3-line"></i>
                <Link to="/">
                <span>خانه</span>
                </Link>
                </div>
                <div className="headerListItem ">
                
                <i class="ri-hotel-bed-fill"></i>
                <Link to="/hotelsroom">
                <span>هتل</span>
                </Link>
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
            
            { type !== "list" &&
                <>
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
                placeholder="کجا میخای بری؟" 
                onChange={(e)=>setDestination(e.target.value)}
                />
                
                </div>
                <div className="headSearchItem">
              <i className="ri-calendar-event-line" />

                <span onClick={()=> setOpenDate(!opanDate)} 
                className="headerSearchText">
                    {`${format(date[0].startDate,"yyyy/dd/mm")} 
                    تا ${format(date[0].endDate,"yyyy/dd/mm")} `}
                    </span>
                {/* //datevrenge for clender */}
                {opanDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}

                />}
                </div>
                <div className="headSearchItem">
              <i className="ri-group-fill" />

                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} بزرگسال . ${options.children} بچه . ${options.room} اتاق`}</span>
                {openOptions && <div className="options">
                    <div className="optionItem  d-flex justify-content-between">
                        <div className="optionText">بزرگسال</div>
                        <div className="optionCounter">
                        <button className="optionCunterButton" 
                        disabled={options.adult <= 1}
                        onClick={() =>handelOption("adult", "d")}>-</button>
                        <span className="optionCunterNumber">{options.adult}</span>
                        <button className="optionCunterButton" 
                        onClick={() =>handelOption("adult", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem  d-flex justify-content-between">
                        <div className="optionText">بچه</div>
                        <div className="optionCounter">
                        <button className="optionCunterButton"
                        disabled={options.children <= 0} 
                        onClick={() =>handelOption("children", "d")}>-</button>
                        <span className="optionCunterNumber">{options.children}</span>
                        <button className="optionCunterButton" 
                        onClick={() =>handelOption("children", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem  d-flex justify-content-between">
                        <div className="optionText">اتاق</div>
                        <div className="optionCounter">
                        <button className="optionCunterButton"
                        disabled={options.room <= 1} 
                        onClick={() =>handelOption("room", "d")}>-</button>
                        <span className="optionCunterNumber">{options.room}</span>
                        <button className="optionCunterButton" 
                        onClick={() =>handelOption("room", "i")}>+</button>
                        </div>
                    </div>
                </div>}
                
                </div>
              
                <div className="headSearchItem">
               <button type="button" onClick={handelSearch} className="btn btn-primary">جستجو</button>


                </div>
              

            </div>
            </>
            }

            </div>
        </div>
    );
};

export default Header;