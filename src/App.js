import React, { Component } from 'react';
import firebase from './firebaseApp';
import Header from './Header';
import Form from './Form';
import List from './List';


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     medications: [],
  //     day: [],
  //     time: []
  //   }
  // }
  render() {
    return (
      <div>
        <Form />
      
        {/* <ul>
          
          {this.state.medications.map((med) => {
            return <li><p>{med}</p></li>
          })}
        </ul> */}
      </div>
    )
  }
}

  export default App;