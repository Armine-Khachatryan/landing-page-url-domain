import React from "react";
import Logo from '../../assets/images/Logo.png';
import Image8 from '../../assets/images/Image8.png';
import classes from './RiskFree.module.css';



function RiskFree(){


    return(
        <div className={classes.whole}>
            <div className={classes.left}>
                <div className={classes.title}>And It’s Totally RISK-FREE to “Test Drive” My Program  and See That
                    It’s a Great Fit for You…</div>
                <div className={classes.text}>Every broker in town is going to ask you to sign a lengthy listing
                    agreement that protects THEM but leaves YOU  vulnerable. Frankly, if things don’t go well, you’ll
                    have to wait to make a change. Bluntly, you’re stuck! When you list with  me, I give you a written
                    cancellation clause right up front that allows you to cancel your listing agreement at any time
                    and<span className={classes.textBold}> pay ZERO penalties </span>if you aren’t thrilled. And I’ll
                    put it in writing and sign my name. <span className={classes.textBold}>I take on 100% of the
                        risk</span> so you  don’t have to.</div>
            </div>
            <div className={classes.right}><img src={Image8} alt={""}/>
                <img className={classes.logoStyle} src={Logo} alt={""}/>
            </div>
        </div>
    )
}

export default RiskFree;