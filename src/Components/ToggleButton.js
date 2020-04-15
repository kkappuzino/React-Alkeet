import React from "react";
import '../Skills.css';



export default function  ToggleButton ({show, setShow}){
    let text ="";
    if(!show){
        text = "Näytä";
    } else {
        text = "Piilota";
    }
    return(
        <div className="toggleButton">
            <button className="btn btn-light" onClick={e => setShow(!show)}>
                {text}
            </button>
        </div> 
    )
}