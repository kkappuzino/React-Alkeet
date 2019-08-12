import React from "react";
import '../hello.css';


export default function  Course (props){
        return(
            <div>
                <div>
                    <h1>{props.partName[0]}</h1>
                    <h1>{props.partDate}</h1>

                    <ul>
                        {/* <li>{props.partContents[0]}</li>
                        <li>{props.partContents[1]}</li>
                        <li>{props.partContents[2]}</li>
                        <li>{props.partContents[3]}</li> */}
                        {props.partContents.map(x => <li>{x}</li>)}
                    </ul>
                </div>

                <div>
                    <h1>{props.partName[1]}</h1>
                    <h1>{props.partDate}</h1>
                    <p>Nimi: {props.partInfo[0]}</p>
                    <p>Sähköposti: {props.partInfo[1]}</p>
                    <p>Linkki:<a>{props.partInfo[2]}</a></p>
                </div>

                <div>
                    <h1>{props.partName[1]}</h1>
                    <h1>{props.partDate}</h1>
                    
                    <table>
                        <tr>
                            <th>Kurssi</th>
                            <th>Opettaja</th>
                            <th>Luokka</th>
                        </tr>
                        <tr>
                            {props.course.map(x => <td>{x}</td>)}
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
