
import React,{ useState } from "react";
import './App.css';
import Form from './components/form';

function App() {
  const [inputText,setInputText] = useState('');
  return (
    <div className="App">
      <h1>Hello world {inputText}</h1>
      <Form inputText={inputText} setInputText={setInputText}/>
      
    </div>
  );
}

export default App;
