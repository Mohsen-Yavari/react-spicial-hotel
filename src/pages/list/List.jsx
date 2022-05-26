import React,{useState} from 'react';
import "./list.scss";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { useLocation } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';

import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

    const location = useLocation ()
    const [destination,setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [opanDate,setOpenDate] = useState(false);

    const [options,setOptions] = useState(location.state.options);
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="list">
                <div className="listContainer container d-flex justify-content-center mt-4">
                    <div className="listWrapper">
                        <div className="listSearch">
                            <h1 className="lsTitle">جستجو</h1>
                            <div className="liItem">
                                <label>مقصد</label>
                                <input 
                                type="text" 
                                placeholder='مقصد'
                                />
                            </div>
                            <div className="liItem">
                                <label>تاریخ</label>
                                <span onClick={()=>setOpenDate(!opanDate)}>{`${format(date[0].startDate,"yyyy/dd/mm")} 
                                تا ${format(date[0].endDate,"yyyy/dd/mm")} `}
                                </span>
                                {opanDate && (<DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                                />)}
                                
                            </div>
                            <div className="liItem ">
                                <label>امکانات</label>
                                <div className="isOptions"></div>
                                <div className="lsOptionItem ">
                                    <div className="lsOptionText ">
                                     کمترین قیمت <small>هر شب </small></div>
                                </div>
                                <input className="optionInput" min={0} type="number" />
                            </div>
                            <div className="liItem">
                                <label>امکانات</label>
                                <div className="lsOptionItem">
                                    <div className="lsOptionText">
                                     بیشترین قیمت <small>هر شب </small></div>
                                </div>
                                <input className="optionInput" min={0} type="number" />
                            </div>
                            <div className="liItem">
                               
                                <div className="lsOptionItem">
                                    <div className="lsOptionText">
                                     بزرگسال</div>
                                </div>
                                <input className="optionInput" type="number" min={1} placeholder={options.adult} />
                            </div>
                            <div className="liItem">
                               
                                <div className="lsOptionItem">
                                    <div className="lsOptionText">
                                    بچه</div>
                                </div>
                                <input className="optionInput" type="number" min={0} placeholder={options.children} />
                            </div>
                            <div className="liItem">
                               
                                <div className="lsOptionItem ">
                                    <div className="lsOptionText">
                                    اتاق</div>
                                </div>
                                <input className="optionInput" type="number" min={1} placeholder={options.room} />
                            </div>
                            <button className="btn btn-primary w-100">جستجو</button>

                        </div>
                        <div className="listResult">
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;