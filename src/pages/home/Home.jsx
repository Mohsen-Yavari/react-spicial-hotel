import React from 'react';
import "./home.scss";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Featured from "../../components/featured/Featured";
import ProportyList from '../../components/proportyList/ProportyList';
import FeaturedProperty from "../../components/featuredProperties/FeaturedProperty";
import MailList from "../../components/mailList/MailList";

const Home = () => {
    return (
        <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
            <Featured />
            <h1 className="homeTitle">لورم ایپسوم متن ساختگی با تولید </h1>
            <ProportyList />
            <h1 className="homeTitle">لورم ایپسوم متن ساختگی   </h1>
            <FeaturedProperty />
            <MailList />

        </div>
        </div>
    );
};

export default Home;