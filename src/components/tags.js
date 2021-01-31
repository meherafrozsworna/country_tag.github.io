import React from "react";
import './tags.css';
import {country_map,country_list} from '../backend/country'
//import {Link} from 'react-router-dom';

class Tags extends React.Component {
    state = {
        input : '',
        countries : []
    }

    async componentDidMount(){
        const { inputText } = this.props.location.state.inputText;
        const words = inputText.split(' ');
        var i ;
        //this.setState({ myArr: [...this.state.myArr, new_value] })
        for(i = 0 ; i < words.length ; i++){
            console.log(i);
            let word = words[i];
            word = word[0].toUpperCase() + word.slice(1);
            if(country_map.has(word)){
                await this.setState({
                    countries : [...this.state.countries , word ]
                })
            }
        }

        await this.setState({
            input : inputText
        })
        

        
        console.log(inputText);
        console.log(this.state.input);
    }
    render(){
        const listItems = this.state.countries.map((country) =>
            <li>{country}</li>
        );
        return(
            <div className= "container">
                <h3>{this.state.input}</h3>
                <ul className="">
                    {listItems}
                    <button className="list_button"><i className="fas fa-plus-square" ></i> Add Tag </button>
                </ul>
            </div>

            
        );
    }
}

export default Tags;