import React from "react";
import Realtor from '../../assets/images/PreviousLogo.svg';
import Image5 from '../../assets/images/Image5.svg';
import Image6 from '../../assets/images/Image6.svg';
import Image7 from '../../assets/images/Image7.svg';
import Image12 from '../../assets/images/Image12.png';
import Icon1 from '../../assets/icons/Icon1.svg';
import classes from './Listen.module.css';

function Listen(){


    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.inside}>
                    <div className={classes.left}>
                        <div>
                            <div className={`${classes.single} ${classes.first}`}>
                                <img className={classes.imageStyleFirst} src={Image5} alt={""}/>
                                <div className={classes.singleText}>“Ryan did a great job selling my house. Can’t thank him
                                    enough!”
                                </div>
                                <div className={classes.singleTitle}>Jeff G</div>
                                <div style={{display:"flex", justifyContent:"flex-end"}}>
                                    <img className={classes.realtorImageStyle} src={Realtor} alt={""}/>
                                </div>
                                <img className={classes.iconStyleFirst} src={Icon1} alt={""}/>
                            </div>
                            <div className={`${classes.single} ${classes.third}`}>
                                <img className={classes.imageStyleThird} src={Image6} alt={""}/>
                                <div className={classes.singleText}>Ryan is not just a typical realtor trying to make
                                    a commission and  move on. He truly cares about all his clients.
                                </div>
                                <div className={classes.singleTitle}>Patrick H.</div>
                                <div style={{display:"flex", justifyContent:"flex-end"}}>
                                    <img className={classes.realtorImageStyle} src={Realtor} alt={""}/>
                                </div>
                                <img className={classes.iconStyleFirst} src={Icon1} alt={""}/>
                            </div>
                        </div>
                        <div>
                            <div className={classes.second}>
                                <img src={Image12} alt={""}/>
                                <img className={classes.imageStyleSecond} src={Image7} alt={""}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.title}>Listen to What Other Ecstatic Sellers Are Saying…</div>
                        <div className={classes.text}>You Don’t Have to Take
                            {/*My Word that My Program Works…*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listen;