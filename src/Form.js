import React, { Component } from 'react';
import firebase from 'firebase';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            medications:{
            medName:"",
            time:"",
            day:"",
            },
            
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.state);
        this.setState({medName: ""})
        this.setState({day:""})
        this.setState({time:""})
        
    }
    render() {
        return (
            <div>
                <form id="medForm" action="submit">
                    <input type="text" placeholder="Medication" id="medName" name="medName" onChange={this.handleChange} value={this.state.medName}/>
                    <input type="text" placeholder="Day" id="day" name="day" onChange={this.handleChange} value={this.state.day}/>
                    <input type="text" placeholder="Time" id="time" name="time" onChange={this.handleChange} value={this.state.time}/>
                    <input type="submit"  value="submit" onClick={this.handleClick}/>
                </form>
            </div>
        );
    }
}

export default Form;