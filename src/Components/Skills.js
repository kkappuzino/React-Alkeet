import React from "react";
import '../Skills.css';

const Input = ({newSkill, setNewSkill, handleForm}) => {
    return(
        <form onSubmit={e=>handleForm(e,newSkill)}>
            <input 
                type="text" 
                onChange={e=>setNewSkill(e.target.value)} 
                value={newSkill} 
                placeholder="Olen oppinut" >
            </input>
        </form>
    )
}
const Skill = ({skill}) => {
    return(
        <li className="skills">{skill}</li>
    )
}

export default function  Skills ({skills, newSkill, setNewSkill, setSkill, handleForm}){
        return(
            <div className="display-flex">
                <h1>Olen oppinut seuraavia asioita</h1>
                <h4>Harjoitus 3</h4>
                <Input handleForm={handleForm} setNewSkill={setNewSkill} newSkill={newSkill}/>
                <ul className="skills">
                    {skills.map(s => (
                            <Skill skill={s} key={skills.indexOf(s)}/>
                        ))}
                </ul>
            </div> 
        )
    }