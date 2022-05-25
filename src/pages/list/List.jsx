import React from 'react';
import "./list.scss";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

const List = () => {
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
                                <input type="text" />
                            </div>
                            <div className="liItem">
                                <label>تاریخ</label>
                                
                            </div>

                        </div>
                        <div className="listResult">asds</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;