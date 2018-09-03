import React, {Component} from "react";
import {Radio, Text} from "./form-fields";

class ConnectionCard extends Component {
  render() {
    return (
      <div className="App-intro">
        Contact Information
        <br/> <Text placeholder="First Name" required/> <Text placeholder="Last Name" required/>
        <br/> <Text placeholder="Email"/>
        <br/> <Text placeholder="Mobile Phone"/> <Text placeholder="Home Phone"/>
        <br/> <Text placeholder="Street"/>
        <br/> <Text placeholder="City"/> <Text placeholder="State"/> <Text placeholder="Zip"/>
        <br/> <Text placeholder="Birthday"/> <Text placeholder="Gender"/>
        <br/> <Text placeholder="Marital Status"/>
        <br/> <Radio name="gathering" label="Gathering Attended" options="8:30 AM, 10:15 AM, 12 Noon" required/>
      </div>
    );
  }
}

export default ConnectionCard;