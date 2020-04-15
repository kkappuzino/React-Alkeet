import React, {useState}  from "react";
import '../Skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from './ToggleButton';
import LikeButton from './like';

const Pic = ({pic}) => {
    const [show, setShow]=useState(false)
    const [like, setlike]=useState(0);
    return(
        
            <tr>
                <td>
                    <h3 className="pic" onClick={e => setShow(!show)}>{pic.title}</h3>
                </td>
                {show &&
                <td>
                    <img className="pic" src={pic.url}></img>
                </td>
                
                }
                {show &&
                <td>
                    <p className="pic">{pic.desc}</p>
                </td>
                }
                <td>
                <button onClick={e => setlike(like+1)}>
                    Likes{like}
                </button>
                </td>
            </tr>
        
    )
}

export default function  Pictures ({pictures}){
        return(
            <div className="display-flex m-5">
                
                    <div>
                        <h4>Kuvia</h4>
                        <table className="pics">
                            {pictures.map(s => (
                                    <Pic pic={s} key={pictures.indexOf(s)}/>
                                ))}
                        </table>
                    </div>
                <LikeButton/>
            </div> 
        )
    }