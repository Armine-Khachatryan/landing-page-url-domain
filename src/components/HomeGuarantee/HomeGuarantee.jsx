import React from "react";
import Logo from '../../assets/images/Logo.png';
import Button from "../../ui/Button/Button.jsx";
import Image1 from '../../assets/images/Image1.png';
import classes from './HomeGuarantee.module.css';

function HomeGuarantee(){


    return(
        <div className={classes.whole}>
            <div className={classes.left}>
                <div className={classes.imgDiv}>
                    <img className={classes.mainImage} src={Image1} alt={""}/>
                    <img className={classes.logoStyle} src={Logo} alt={""}/>
                </div>
            </div>
            <div className={classes.right}>
                <div>
                    <div className={classes.title}>I <span className={classes.boldTitle}>GUARANTEE</span>  to SELL Your
                        Millersville home for <span className={classes.boldTitle}>5.25% MORE MONEY</span>…..in Just 20
                        Days or Less or I’ll Pay You <span className={classes.boldTitle}>Up to $5,000!*</span></div>
                    <h5>My Unique <span className="boldText">“Guaranteed Highest Price”
                    Program</span> is PROVEN to Sell Homes for 5.25% Higher Prices than Homes Listed with “Lesser”
                        Agents.</h5>
                    <h5>On an Average $350K Home that’s an EXTRA $18,375
                        <span className="boldText">...Right In YOUR Pocket!</span></h5>
                    <Button>Call 717-471-2910 Right NOW</Button>
                </div>
            </div>
        </div>
    )
}

export default HomeGuarantee;