import React from "react";
import "./footer.css";
import example from "../../assets/open-source-logo.png"
import { colorContext } from "../../App";

const Footer = ({fontColor}) => {
    return(
    <div className="image_box"> 
        <img height="45" width="auto" src={example}></img>
        <h4 style={{color: fontColor ? "white" : "black"}}>©Copyright 2023 EXAMPLE GROUP</h4>
    </div>)
}

export default Footer;
