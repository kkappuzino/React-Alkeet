import React from "react";
import '../hello.css';

const Row = (props) => {
    return(
        <tr>
            <td>{props.course.course}</td>
            <td>{props.course.teacher}</td>
            <td>{props.course.class}</td>
        </tr>
    )
}

export default function  CourseInfo (props){
        return(
            <table>
                <tbody>
                    {props.courses.map(c => (
                        <Row course = {c} key = {c.id}/>
                    ))}
                </tbody>
            </table>
        )
    }