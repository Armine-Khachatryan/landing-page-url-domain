import React from "react";
import Image2 from '../../assets/images/Image2.png';
import classes from './MoneyFaster.module.css';



function MoneyFaster(){


    return(
        <div className={classes.whole}>
            <div className={classes.left}>
                <h1 style={{maxWidth:"550px", textAlign:"left"}}>And it Puts the Money Right in Your Pocket…
                    <br/><span className="titleItalic">FASTER!</span>
                </h1>
                <h5 style={{maxWidth:"650px"}}>BECAUSE of the Millersville-specific marketing elements in my proprietary program, buyers are
                    drawn to your home  FIRST before shopping for every other home on the market. So, by getting the
                    most anxious buyers into your home, we  avoid the inconvenience of showing the home to time-wasting
                    “tire kickers” and drastically increase the odds of getting a  solid offer from a serious buyer
                    QUICKLY. I’m so confident in my ability to deliver a sale in the shortest possible time that I
                    back up my promise with a written performance guarantee that your home will be
                    <span className="boldText"> SOLD </span>in just<span className="boldText"> 19 Days or less. </span>
                    <span className="underlinedText">No other  agent will make you this sort of rock-solid GUARANTEE.
                    </span>
                </h5>
                <h1 style={{maxWidth:"650px", textAlign:"left"}}>Everything is TOTALLY Transparent, so You Encounter <span
                    className="boldTitleUnderlined">ZERO Surprises</span></h1>
            </div>
            <div className={classes.right}>
                <img className={classes.imageStyle} src={Image2} alt={""}/>
            </div>
        </div>
    )
}

export default MoneyFaster;