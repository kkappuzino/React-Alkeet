import React from "react";
import '../hello.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from './ToggleButton';
import LikeButton from "./like";

const ListItem = (props) => {
    return(
        <li>{props.text}</li>
    )

}

export default function  Course (props){
        return(
            <div>
                <div className="m-5">
                    <h1>{props.partName[0]}</h1>
                    <h1>{props.partDate}</h1>

                    <ul>
                        {/* <li>{props.partContents[0]}</li>
                        <li>{props.partContents[1]}</li>
                        <li>{props.partContents[2]}</li>
                        <li>{props.partContents[3]}</li> */}
                        {props.partContents.map(t => (
                            <ListItem text={t} key={props.partContents.indexOf(t)}/>
                        ))}
                    </ul>
                    <LikeButton/>
                    <ToggleButton/>
                </div>

                <div className="m-5">
                    <h1>{props.partName[1]}</h1>
                    <h1>{props.partDate}</h1>
                    <p>Nimi: {props.partInfo[0]}</p>
                    <p>Sähköposti: {props.partInfo[1]}</p>
                    <a><p>Linkki:{props.partInfo[2]}</p></a>
                </div>
                <LikeButton/>
                <ToggleButton/>
            </div>
        )
    }
