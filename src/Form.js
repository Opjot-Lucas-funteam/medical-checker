import React, { Component } from 'react';
import firebase from 'firebase';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            medications:[],
            med: '',
            day: '',
            time: ''
        }
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push(data[key]);
            }
            this.setState({
                medications: newState,
                day: newState,
                time: newState
            });
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick(event) {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.med.state.userInput);
        this.setState({ userInput: "" });
        // this.time.setState({ userInput: "" });
        // this.day.setState({ userInput: "" });
    }
    render() {
        return (
            <div>
                <form action="submit">
                    <input type="text" placeholder="Medication" id="med" name="med" onChange={this.handleChange} value={this.state.med}/>
                    <input type="text" placeholder="Day" id="day" name="day" onChange={this.handleChange} value={this.state.day}/>
                    <input type="text" placeholder="Time" id="time" name="time" onChange={this.handleChange} value={this.state.time}/>
                    <input type="submit" value="submit" onClick={this.handleClick}/>
                </form>
                {this.state.medications.map((med) => {
                    return <li><p>{med}</p></li>
                })}
            </div>
        );
    }
}

export default Form;