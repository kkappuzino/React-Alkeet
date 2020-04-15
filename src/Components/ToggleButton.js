import React from "react";
import '../Skills.css';



export default function  ToggleButton ({e, show, HandleClick, buttonNumber}){
    let text ="";
    if(!show){
        text = "Näytä";
    } else {
        text = "Piilota";
    }
    return(
        <div className="toggleButton">
            <button className="btn btn-light" onClick={e => HandleClick(buttonNumber)}>
                {text}
            </button>
        </div> 
    )
}