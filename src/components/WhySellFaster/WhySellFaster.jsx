import React from "react";
import classes from './WhySellFaster.module.css';


function WhySellFaster (){

    return(
        <div className="container">
            <div className={classes.inside}>
                <h1 style={{maxWidth:"1244px", width:"100%"}}>Here’s Precisely Why Your Millersville Home will SELL FASTER...</h1>
                <div className={classes.text}>While just about every agent in town will tell you that their approach to
                    selling is unique, none have developed a program  that’s designed SPECIFICALLY to sell Millersville
                    homes for the<span className={classes.boldText}> Highest Price and in the Shortest Time. </span>So,
                    when you list  with agents with a “general” marketing plan, you are at risk of getting nothing more
                    than “general” results that could wind  up <span className={classes.textUnderlined}>costing you
                    thousands</span> (or more) when you sell. My unique “Guaranteed Highest Program” removes this
                    risk. It’s the  only one of its kind that’s especially engineered to reach the most likely to act
                    buyers who are looking for a Millersville  home like yours, and to cause them to make strong (and fast)
                    offers…<br/><span className={classes.boldText}> …so YOU take home </span>
                    <span className={classes.boldTextUnderlined}>more cash</span><span className={classes.boldText}> at
                        closing.</span>
                </div>
            </div>
        </div>
    )
}

export default WhySellFaster;
