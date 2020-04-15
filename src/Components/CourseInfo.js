import React from "react";
import '../hello.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from './ToggleButton';
import LikeButton from './like';

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
            <div className="m-5">
                <table>
                    <tbody>
                        {props.courses.map(c => (
                            <Row course = {c} key = {c.id}/>
                        ))}
                    </tbody>
                </table>
                <LikeButton/>
                <ToggleButton/>
            </div>
        )
    }