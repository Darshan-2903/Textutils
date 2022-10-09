import React, {useState} from "react";


export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handledelClick=()=>{
    let newText=("");
    setText(newText);
  }
  const handledcopy=()=>{
    var txt=document.getElementById("exampleFormControlTextarea1");
    txt.select();
    navigator.clipboard.writeText(txt.value);

  }
  const handleExtraSpace =()=>{
    let newText =text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  
 

  const [text, setText] = useState();


  return (
    <>
    <div className="Container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handledcopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handledelClick}>
        Clear
      </button>
    </div>
    
    <div className="summary" style={{color: props.mode==='dark'?'white':'black'}}>
      <h4>Your Text Summary</h4>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h4>Preview</h4>
      <p>{text}</p>
       
      
    </div>  
    </>
  );
}
