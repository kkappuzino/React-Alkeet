import React from "react";
import '../Skills.css';



export default function  ToggleButton ({show, clickHandler, buttonNumber}){
    let text ="";
    if(!show){
        text = "Näytä";
    } else {
        text = "Piilota";
    }
    return(
        <div className="toggleButton">
            <button OnClick={e => clickHandler(buttonNumber)}>
                {text}
            </button>
        </div> 
    )
}