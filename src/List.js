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
        console.log(dbRef)
        dbRef.on('value', (response) => {
            
            const dataFromDb=response.val();
            console.log(dataFromDb);
            const newState = [];
            for (let key in dataFromDb) {
                newState.push(dataFromDb[key]);
                console.log(dataFromDb[key])
            }
            console.log(newState)
            this.setState({
                medications: newState,
                // medName:this.state.medName,
                // day: this.state.day,
                // time: this.state.time
                
            });
        });
    
    }

    render() {
        // const { key, medicine } = this.props.medProp[0];
        // console.log(key, medicine)
        return (

            <div>
                <ul>
                     {this.state.medications.map((medicine) => {
                          return(
                            //  Object.keys(medicine).map((med, index) => {
                            //      return <li key={index}>{medicine} : {medicine[med]}</li>
                            //  },
                                <li>
                                    <h3>
                                        {medicine.medName} : {medicine.day} , {medicine.time}
                                    </h3>
                                </li>
                            //  )
                          )
                     }
                    )}
                </ul>
                {/* )}  */}

            </div>
        );
    }
}

export default List;