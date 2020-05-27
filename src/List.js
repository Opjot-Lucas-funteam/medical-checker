import React, { Component } from 'react';
import firebase from 'firebase'
class List extends Component {
    constructor(){
        super();
        this.state={
            medications:[],
        }
    }

    componentDidMount (){
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            
            const dataFromDb=response.val();
            const newState = [];
            for (let key in dataFromDb) {
                newState.push(dataFromDb[key]);
            }
            this.setState({
                medications: newState,
            });
        console.log(this.state.medications)
        });
        
    }


    

    render() {
        return (
            <div>
                <ul>
                    {this.state.medications.map((medicine) => {
                    return(
                        <li>
                            <h3>
                                {medicine.medName} : {medicine.day} , {medicine.time}
                            </h3>
                        </li>
                        )}
                    )}
                </ul>
            </div>
        );
    }
}

export default List;