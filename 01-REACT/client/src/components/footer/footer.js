import React, {useState} from "react";
import "./footer.css";
import example from "../../assets/open-source-logo.png"

const Footer = () => {
    return(
    <div className="image_box"> 
        <img height="45" width="auto" src={example}></img>
        <h4>©Copyright 2023 EXAMPLE GROUP</h4>
    </div>)
}

export default Footer;
