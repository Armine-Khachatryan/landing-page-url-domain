import React from "react";
import classes from './Make.module.css';
import Image9 from "../../assets/images/Image9.png";

function Make(){


    return(
        <div className={classes.whole}>
            <div className={classes.left}>
                <img src={Image9} alt={""}/>
            </div>
            <div className={classes.right}>
                <div className={classes.title}>I’ll Make My One-Of-A-Kind Offer Even Sweeter…  You Can Save an
                    Additional $1,500…But You Have to Act Now</div>
                <div className={classes.text}>Obviously, there is overwhelming demand for this offer…even more obvious…
                    due to time constraints, I can’t possibly  meet with every homeowner who wants to take<span
                        className={classes.textBold}> advantage</span> of
                    my innovative program and guarantee the sale of their  home. So, if you are serious about selling,
                    contact me between now and July 15th, 2024 and I will<span className={classes.textBold}> waive
                </span> the usual  $1,500 <span className={classes.textUnderlined}>program fee right up front.
                </span>  (expressly limited to the first 10 new clients.)
                </div>
            </div>
        </div>
    )
}

export default Make;