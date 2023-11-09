import {useState} from "react";

export function UserInputPanel({onChange, userInput}) {

    return (
        <div id="user-input" className="input-group">
            <div>
                <div className="labeled-input">
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} name="initialInvestment" onChange={(event)=>onChange('initialInvestment', event.target.value)}></input>
                </div>
                <div className="labeled-input">
                    <label>Annual Investment</label>
                    <input type="number" required name="annualInvestment" value={userInput.annualInvestment} onChange={(event)=>onChange('annualInvestment', event.target.value)}></input>
                </div>
            </div>

            <div>
                <div className="labeled-input">
                    <label>Expected Return</label>
                    <input type="number" required name="expectedReturn" value={userInput.expectedReturn} onChange={(event)=>onChange('expectedReturn', event.target.value)}></input>
                </div>

                <div className="labeled-input">
                    <label>Duration</label>
                    <input type="number" required name="duration" value={userInput.duration} onChange={(event)=>onChange('duration', event.target.value)}></input>
                </div>
            </div>

        </div>
    )
}