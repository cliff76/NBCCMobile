import React, {Component} from "react";
import {Radio, Text} from "./form-fields";

class ConnectionCard extends Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  handleOnChange(e) {
    const update = {[e.target.name]: e.target.value};
    this.setState(prevState => {
      return {...prevState, ...update};
    });
  }

  render() {
    return (
      <form className="App-intro">
        Contact Information
        <br/> <Text onChange={this.handleOnChange.bind(this)} name="firstname" placeholder="First Name" required/>
              <Text onChange={this.handleOnChange.bind(this)} name="lastname" placeholder="Last Name" required/>
        <br/> <Text onChange={this.handleOnChange.bind(this)} name="email" placeholder="Email"/>
        <br/> <Text onChange={this.handleOnChange.bind(this)} name="mobilephone" placeholder="Mobile Phone"/>
              <Text onChange={this.handleOnChange.bind(this)} name="homephone" placeholder="Home Phone"/>
        <br/> <Text onChange={this.handleOnChange.bind(this)} name="street" placeholder="Street"/>
        <br/> <Text onChange={this.handleOnChange.bind(this)} name="city" placeholder="City"/>
              <Text onChange={this.handleOnChange.bind(this)} name="state" placeholder="State"/>
              <Text onChange={this.handleOnChange.bind(this)} name="zip" placeholder="Zip"/>
        <br/> <Text onChange={this.handleOnChange.bind(this)} name="birthday" placeholder="Birthday"/>
              <Text onChange={this.handleOnChange.bind(this)} name="gender" placeholder="Gender"/>
        <br/> <Text onChange={this.handleOnChange.bind(this)} name="maritalstatus" placeholder="Marital Status"/>
        <br/> <Radio onChange={this.handleOnChange.bind(this)} name="gathering" label="Gathering Attended" options="8:30 AM, 10:15 AM, 12 Noon" values="[8:30], [10:15], [12:00]" required/>
        <br/> <Radio onChange={this.handleOnChange.bind(this)} name="status" label="I am a:" options="1st time guest, 2nd time guest, Regular attendee" values="1st, 2nd, Reg" required/>
      </form>
    );
  }
}

export default ConnectionCard;