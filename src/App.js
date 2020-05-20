import React, { Component } from 'react';
import firebase from './firebaseApp';
import Header from './Header';
import Form from './Form';
import List from './List';


class App extends Component {
  constructor() {
    super();
    this.state = {
      medications: {},
      showDisplayInfo: true,
    }
  }

  displayInfo = (key) => {
    const medToShow = this.state.newMed.filter(item => item.key === key)
    this.setState({
      showDisplayInfo: true,
      showMed: medToShow,
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Form />
        {this.state.showDisplayInfo ? 
          <List medProp={this.state.showMed} />
          : null}
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