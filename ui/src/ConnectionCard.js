import React, {Component} from "react";

class ConnectionCard extends Component {
  render() {
    return (
      <div className="App-intro">
        Contact Information
        <br/> <input type="text" placeholder="First Name"/> <input type="text" placeholder="Last Name"/>
        <br/> <input type="text" placeholder="Email"/>
        <br/> <input type="text" placeholder="Mobile Phone"/> <input type="text" placeholder="Home Phone"/>
        <br/> <input type="text" placeholder="Street"/>
        <br/> <input type="text" placeholder="City"/> <input type="text" placeholder="State"/> <input type="text" placeholder="Zip"/>
        <br/> <input type="text" placeholder="Birthday"/> <input type="text" placeholder="Gender"/>
        <br/> <input type="text" placeholder="Marital Status"/>
      </div>
    );
  }
}

export default ConnectionCard;