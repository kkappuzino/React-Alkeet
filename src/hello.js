import React from "react";
import './hello.css';


export default class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {mode: 'Frontpage'};
     
    }

    render(){
        console.log('Hello from komponentti');
            const now = new Date();
            const a = 10;
            const b = 20;
        return(

            <div>
                <p>Hello world it is {now.toString()}</p>

                <p> {a} plus {b} is {a + b}</p>

                
            </div>
        )
    }
}

