import React, { Component } from 'react';
import firebase from 'firebase';
import DataGrid from './DataGrid';


//-----------------all comments here are for React-DataGrid------//

const rows = [
    { day: 1, medName: "Task 1", time: 20 },
    { day: 1, medName: "Task 2", time: 40 },
    { day: 2, medName: "Task 3", time: 60 }
];

const columns = [
    { key: "day", name: "Day", editable: true },
    { key: "medName", name: "Medications", editable: true },
    { key: "time", name: "Time", editable: true }
];


//
class List extends Component {
    constructor(){
        super();
        this.state={
            medications:[],
            rows
        }
    }
    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
            const rows = state.rows.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            return { rows };
        });
    };
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
                    <DataGrid
                        columns={columns} 
                        rowGetter={i => this.state.rows[i]}
                        rowsCount={3}
                        // onGridRowsUpdated={this.onGridRowsUpdated}
                        // enableCellSelect={true}
                    />
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