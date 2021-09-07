import React, { useState } from 'react'


export default function Textform() {

    const handleUppercase = () => {
        // console.log("fire", text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLowercase = () =>{
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handletextchange = (e) => {
        // console.log("onchange");
        setText(e.target.value);

    }

    const [text, setText] = useState("")
    return (
        <>
            <div className="container">
                <div className="my-3">
                    <h2>Enter Text To Analyze</h2>
                    <div className="mb-3 my-3">
                        <textarea className="form-control" value={text} onChange={handletextchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <button className="btn btn-secondary" onClick={handleUppercase}>Change to UpperCase</button>
                    <button className="btn btn-secondary mx-3" onClick={handleLowercase}>Change to LowerCase</button>


                </div>
            </div>
            <div className="container">
                <h3>Analyze Report</h3>
                <p><b>{text.length}</b> Number of Characters</p>
                <p><b>{text.split(" ").length}</b> Number of Words</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
