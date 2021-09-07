import React, { useState } from 'react'


export default function Textform() {

    const handleUppercase = () => {
        // console.log("fire", text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handletextchange = (e) => {
        // console.log("onchange");
        setText(e.target.value);

    }

    const [text, setText] = useState()
    return (
        <>
            <div className="container">
                <div className="my-3">
                    <h2>Enter Text To Analyze</h2>
                    <div className="mb-3 my-3">
                        <textarea className="form-control" value={text} onChange={handletextchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <button className="btn btn-secondary" onClick={handleUppercase}>Change to uppercase</button>

                </div>
            </div>
            <div className="container">
            <h3>Analyze Report</h3>
            
            </div>
        </>
    )
}
