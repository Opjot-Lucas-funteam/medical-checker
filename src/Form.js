import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form action="submit">
                    <input type="text" placeholder="Medication"/>
                    <input type="text" placeholder="Day"/>
                    <input type="text" placeholder="Time"/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default Form;