import React, { Component } from 'react';
import firebase from './firebaseApp';
import Header from './Header';
import Form from './Form';
import List from './List';


class App extends Component {
  constructor(){
    super();

    this.state={
      medication:{},
      
    }

  }

  componentDidMount(){
    const dbRef= firebase.database().ref();
    
    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      
      for (let key in data) {
        const medicalInfo = {
          key: key,
          name: data[key]
        }
        // newState.push(data[key]);
        newState.push(medicalInfo)
      }
      this.setState({
        newMed: newState
      });
    });
  }

  handleChange =(e)=>{
    this.setState({
      userInput:e.target.value,
    })
  }
  handleClick =(e, userInput)=>{
    e.preventDefault();
    if (this.state.userInput === "" ){
      alert("please enter info")
    } else {
      const dbRef = firebase.database().ref()
      dbRef.push(this.state.userInput)

      const medObject={
        medName:userInput.medName,
        medDay:userInput.medDay,
        medTime:userInput.medTime
      }

      dbRef.push(medObject);

      this.setState({
        medName: userInput.medName,
        medDay: userInput.medDay,
        medTime: userInput.medTime
      })
    }
  }

  render() {
    return (
        <section>
          <div>
            <Header />
          </div>
          <div>
            <Form />
          </div>
          <div>
            <List />
          </div>
        </section>
      )
    }
}
export default App;