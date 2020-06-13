import React, { Component } from 'react';
import firebase from 'firebase';

const sorter = {
    // "sunday": 0, // << if sunday is first day of week
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6,
    "sunday": 7
}

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
// console.log(this.medications)

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    

    sortDateOnClick=(med1, med2)=>{
        
        let day1 = med1.day.toLowerCase();
        let day2 = med2.day.toLowerCase();
        return sorter[day1] - sorter[day2];
        
    }
    handleClick = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.state);
        this.setState({medName: ""})
        this.setState({day:""})
        this.setState({time:""})
        // console.log(sortDateOnClick, "hi");
        this.sortDateOnClick({day:""});
        // console.log(medications)
    }
    render() {
        return (
            <div>
                <form id="medForm" action="submit">
                    <input type="text" placeholder="Medication" id="medName" name="medName" onChange={this.handleChange} value={this.state.medName}/>
                
                    <label for="day">Select Day.</label>
                    <select name="day" onChange={this.handleChange} value={this.state.day}>
                        <option value="" disabled selected>Select Day.</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                    
                    <label for="day">Select Time.</label>
                    <select id="time" name="time" onChange={this.handleChange} value={this.state.time}>
                    <option value="" disabled selected>Select Time.</option>
                        <option value="12:00 AM">12:00 AM</option>
                        <option value="12:30 AM">12:30 AM</option>
                        <option value="1:00 AM">1:00 AM</option>
                        <option value="1:30 AM">1:30 AM</option>
                        <option value="2:00 AM">2:00 AM</option>
                        <option value="2:30 AM">2:30 AM</option>
                        <option value="3:00 AM">3:00 AM</option>
                        <option value="3:30 AM">3:30 AM</option>
                        <option value=":00 AM">4:00 AM</option>
                        <option value="4:30 AM">4:30 AM</option>
                        <option value="5:00 AM">5:00 AM</option>
                        <option value="5:30 AM">5:30 AM</option>
                        <option value="6:00 AM">6:00 AM</option>
                        <option value="6:30 AM">6:30 AM</option>
                        <option value="7:00 AM">7:00 AM</option>
                        <option value="7:30 AM">7:30 AM</option>
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="8:30 AM">8:30 AM</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="9:30 AM">9:30 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="1:30 PM">1:30 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="2:30 PM">2:30 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="3:30 PM">3:30 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="4:30 PM">4:30 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                        <option value="9:30 PM">9:30 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                        <option value="10:30 PM">10:30 PM</option>
                        <option value="11:00 PM">11:00 PM</option>
                        <option value="11:30 PM">11:30 PM</option>
                    </select>
                    {/* <input type="text" placeholder="Time" id="time" name="time" onChange={this.handleChange} value={this.state.time}/> */}
                    <input type="submit"  value="submit" onClick={this.handleClick} />
                </form>
            </div>
        );
    }
}

export default Form;