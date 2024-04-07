import React, { useState } from "react";

const Tag = () => {
    const [name, setName] = useState("");
    const [tnC, setTnC] = useState(false);
    const [team, setTeam] = useState("");

    const getFormData = (e) => {
        console.log(name, tnC, team);
        e.preventDefault();
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
        }}>
            <div
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    margin: "10px"
                }}
            >
                <form onSubmit={getFormData}>
                    <h1>Form</h1>
                    <input 
                        type="text" 
                        placeholder="Enter Text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br/><br/>
                    <select onChange={(e) => setTeam(e.target.value)}>
                        <option>RCB</option>
                        <option>RR</option>
                        <option>MI</option>
                        <option>PBKS</option>
                        <option>CSK</option>
                        <option>GT</option>
                        <option>LSG</option>
                        <option>DC</option>
                        <option>SRH</option>
                        <option>KKR</option>
                    </select>
                    <br/><br/>
                    <input 
                        type="checkbox" 
                        checked={tnC} 
                        onChange={(e) => setTnC(e.target.checked)}
                    />
                    <span>Accept Terms and Conditions</span>
                    <br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Tag;
