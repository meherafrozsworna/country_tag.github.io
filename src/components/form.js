import React, { useState } from "react";
import './form.css';
import {Link} from 'react-router-dom';

const Form = () => {
    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        console.log( e.target.value);
        setInputText(e.target.value);
    }
    
    const handleSubmit = (e) => {
    //e.preventDefault();
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
            <Link to={{
                pathname:"/tags",
                state : {
                    inputText : {inputText}
                }
            }}
            >
                <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
            </Link>
            
        </form>
      
        
    );
}

export default Form;