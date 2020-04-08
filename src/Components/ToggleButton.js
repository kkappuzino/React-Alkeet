import React from "react";
import '../Skills.css';



export default function  ToggleButton ({show, HandleClick, buttonNumber}){
    let text ="";
    if(!show){
        text = "Näytä";
    } else {
        text = "Piilota";
    }
    return(
        <div className="toggleButton">
            <button onClick={e => HandleClick(buttonNumber)}>
                {text}
            </button>
        </div> 
    )
}