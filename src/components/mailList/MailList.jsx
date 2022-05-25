import React from 'react';
import "./mailList.scss";

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">صرفه جویی در پول,صرفه جویی در زمان</h1>
            <span className="mailDesc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="ایمیل را وارد کنید" />
                <button>ثبت نام</button>
            </div>
        </div>
    );
};

export default MailList;