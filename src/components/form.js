import React from "react";
import './form.css';

const Form = ({inputText,setInputText}) => {
    const handleChange = (e) => {
        console.log( e.target.value);
        setInputText(e.target.value);
    }
    
    const handleSubmit = (e) => {
    e.preventDefault();
    }

    return(
        <form className="form">
            <input 
                type="text" 
                className="input" 
                placeholder="Enter your text here" 
                value={inputText}
                onChange={handleChange}
            />
            <button className="button" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      
        
    );
}

export default Form;