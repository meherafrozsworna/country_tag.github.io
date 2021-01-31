
import React,{ useState } from "react";
import './App.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';

import Form from './components/form';
import Tags from './components/tags';


function App() {
  const [inputText,setInputText] = useState('');
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/" component={Form}/>
      <Route  path="/tags" component={Tags}/>
      
    </Switch>
    
    </Router>
    
    
   
    {
      /*

      <h1>Hello world {inputText}</h1>
      <Form inputText={inputText} setInputText={setInputText}/>
      */
    }
    
    </div>
  );
}

export default App;
