import {Header} from "./components/Header.jsx";
import {UserInputPanel} from "./components/UserInputPanel.jsx";

import {ResultPanel} from "./components/ResultPanel.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";

function App() {
    const [userInput, setUserInput] = useState({
            initialInvestment: 0,
            annualInvestment: 0,
            expectedReturn: 0,
            duration: 0
        }
    )
     function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput=>{
            return{
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        } )
    }


    return (
        <>
            <Header text="React Investment Calculator" />
            <UserInputPanel userInput={userInput} onChange ={handleChange} />
            <ResultPanel userInput={userInput} />
        </>
    )
}

export default App
