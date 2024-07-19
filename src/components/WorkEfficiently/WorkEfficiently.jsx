import React from "react";
import classes from './WorkEfficiently.module.css';

function WorkEfficiently(){
    return(
        <div className="container">
            <div className={classes.inside}>
                <div className={classes.text}>
                    When you list your Millersville home with me you will automatically avoid all the miscues and false
                    starts that are commonly experienced when trying to sell with an agent. Because of the unique
                    marketing elements that make up my “Guaranteed Highest Price” Program, you’ll eliminate all
                    guesswork and “theory” in your home selling experience, and  you’ll have a straight-forward
                    approach that produces PREDICTABLE RESULTS without any hassles. You will enjoy the  time saved and
                    last-minute surprises avoided by simply having a plan in place that <span
                    className={classes.textBoldUnderlined}>actually works…efficiently…</span> from Day  1.
                </div>
            </div>
        </div>
    )
}

export default WorkEfficiently;