import {Fragment} from "react";


export function Header({text}) {
    return(
        <div id = "header">
            <img id="header img" src="/investment-calculator-logo.png"></img>
            <h1 id="header h1">{text}</h1>
        </div>
    )
}