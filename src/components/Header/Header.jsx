import React from "react";
import classes from './Header.module.css';
import Button from "../../ui/Button/Button.jsx";

function Header(){
    return(
        <header>
            <div className="container">
                <div className={classes.inside}>
                    <Button>Call 717-471-2910 Right NOW</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;