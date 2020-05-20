import React, { Component } from 'react';

class List extends Component {
    constructor(){
        super();
        this.state={
            medications:'',
        }
    }
    render() {
        const { key, medicine } = this.props.medProp[0];
        console.log(key, medicine)
        return (

            <div>
                <ul>
                     {this.state.medications.map((medicine) => {
                          {
                             Object.keys(medicine).map((med, index) => {
                                 return <li key={index}>{medicine} : {medicine[med]}</li>
                             },
                                <li>
                                    <h3>
                                        {medicine.medName} : {medicine.day} , {medicine.time}
                                    </h3>
                                </li>
                             )
                         }
                     }
                    )}
                </ul>
                {/* )}  */}
                <p>{this.state.medications}</p>

            </div>
        );
    }
}

export default List;