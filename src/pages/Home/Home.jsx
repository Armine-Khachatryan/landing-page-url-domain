import React from "react";
import classes from './Home.module.css';
import Header from "../../components/Header/Header.jsx";
import WhySellFaster from "../../components/WhySellFaster/WhySellFaster.jsx";
import HomeGuarantee from "../../components/HomeGuarantee/HomeGuarantee.jsx";
import MoneyFaster from "../../components/MoneyFaster/MoneyFaster.jsx";
import WorkEfficiently from "../../components/WorkEfficiently/WorkEfficiently.jsx";
import RiskFree from "../../components/RiskFree/RiskFree.jsx";
import Make from "../../components/Make/Make.jsx";
import Listen from "../../components/Listen/Listen.jsx";
import GetNow from "../../components/GetNow/GetNow.jsx";
import Footer from "../../components/Footer/Footer.jsx";


function Home(){

    return(
        <div className={classes.whole}>
            <Header/>
            <HomeGuarantee/>
            <WhySellFaster/>
            <MoneyFaster/>
            <WorkEfficiently/>
            <Listen/>
            <RiskFree/>
            <Make/>
            <GetNow/>
            <Footer/>
        </div>
    )
}

export default Home;