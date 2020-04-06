import React from "react";
import '../Skills.css';

const Input = ({newSkill, changeHandler}) => {
    return(
        <input 
            type="text" 
            onChange={changeHandler} 
            value={newSkill} 
            placeholder="Olen oppinut" >
        </input>
    )
}
const Skill = (props) => {
    return(
        <li>{props.text}</li>
    )
}

export default function  Skills ({skills, newSkill, changeHandler}){
        return(
            <div className="display-flex">
                <h1>Olen oppinut seuraavia asioita</h1>
                <h4>Harjoitus 3</h4>
                <Input changeHandler={changeHandler} newSkill={newSkill}/>
                <ul className="skills">
                    {skills.map(s => (
                            <Skill skill={s} key={skills.indexOf(s)}/>
                        ))}
                </ul>
            </div> 
        )
    }