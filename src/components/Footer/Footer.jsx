import React from "react";
import FooterImage1 from '../../assets/images/FooterImage1.png';
import FooterImage2 from '../../assets/images/FooterImage2.png';
import FooterImage3 from '../../assets/images/FooterImage3.png';
import FooterImage4 from '../../assets/images/FooterImage4.png';
import FooterImage5 from '../../assets/images/FooterImage5.png';
import classes from './Footer.module.css';



function Footer(){

    return(
        <footer>
            <div className={"container"}>
                <div className={classes.footerInside}>
                    <div className={classes.footerUp}>
                        <div className={classes.left}>
                            <img className={classes.imageStyle1} src={FooterImage1} alt={""}/>
                            <div className={classes.leftPart}>
                                <div className={classes.text}>“...I would highly recommend him for  listing your house...” - Rich R</div>
                                <img className={classes.imageStyle2} src={FooterImage2} alt={""}/>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.rightUp}>
                                <img className={classes.imageStyle3} src={FooterImage3} alt={""}/>
                                <img className={classes.imageStyle4} src={FooterImage4} alt={""}/>
                                <img className={classes.imageStyle5} src={FooterImage5} alt={""}/>
                            </div>
                            <div className={classes.rightText}>Ryan Landgraff, M.Ed, CREN</div>
                        </div>
                    </div>
                    <div className={classes.footerDown}>
                        <div className={classes.title}>Terms and Conditions apply. The Guaranteed Highest Price program
                            is a limited time offer. Call 717-471-2910 for avaibility. Howard Hanna  Real Estate
                            Services, 717-392-0200</div>
                        <div className={classes.title} style={{textDecoration:"underline"}}
                             onClick={()=>  window.open('https://www.vecteezy.com/')}
                        >vecteezy.com</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;