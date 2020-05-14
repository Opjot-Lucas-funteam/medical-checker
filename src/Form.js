import React, { Component } from 'react';
import firebase from 'firebase';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            medications:{
                medName: '',
                day:'',
                time: ''
            },
            
        }
        
    }
    componentDidMount (){
        const dbRef = firebase.database().ref();
        console.log(dbRef)
        dbRef.on('value', (response) => {
            
            const dataFromDb=response.val();
            console.log(dataFromDb);
            const newState = [];
            for (let key in dataFromDb) {
                newState.push(dataFromDb[key]);
            }
            this.setState({
                medications: newState,
                medName:this.state.medName,
                day: this.state.day,
                time: this.state.time
            });
        });
    
    }
        
   
  

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.state);
        this.setState({ userInput: "" });
        // console.log(this.state)
        // this.time.setState({ userInput: "" });
        // this.day.setState({ userInput: "" });
    }
    render() {
        return (
            <div>
                <form action="submit">
                    <input type="text" placeholder="Medication" id="medName" name="medName" onChange={this.handleChange} value={this.state.medName}/>
                    <input type="text" placeholder="Day" id="day" name="day" onChange={this.handleChange} value={this.state.day}/>
                    <input type="text" placeholder="Time" id="time" name="time" onChange={this.handleChange} value={this.state.time}/>
                    <input type="submit" value="submit" onClick={this.handleClick}/>
                </form>
                
            </div>
        );
    }
}

export default Form;