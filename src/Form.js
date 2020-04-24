import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form action="submit">
                    <input type="text" placeholder="Medication" id="medName" name="medName"/>
                    <input type="text" placeholder="Day" id="medDay" name="medDay"/>
                    <input type="text" placeholder="Time" id="medTime" name="medTime"/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default Form;