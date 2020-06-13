import React, { Component } from 'react';
import firebase from 'firebase';
import DataGrid from './DataGrid';


//-----------------all comments here are for React-DataGrid------//
const columns = [
    { key: "id", name: "Medication", editable: true },
    { key: "title", name: "Day", editable: true },
    { key: "complete", name: "Time", editable: true }
]; 

const rows = [
    { id: 0, title: "Task 1", complete: 20 },
    { id: 1, title: "Task 2", complete: 40 },
    { id: 2, title: "Task 3", complete: 60 }
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
        
        //-----------------all comments here are for React-DataGrid------//
        const columns = [
            { key: "id", name: "Medication", editable: true },
            { key: "title", name: "Day", editable: true },
            { key: "complete", name: "Time", editable: true }
        ]; 

        const rows = [
            { id: 0, title: "Task 1", complete: 20 },
            { id: 1, title: "Task 2", complete: 40 },
            { id: 2, title: "Task 3", complete: 60 }
        ];
        //
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