import React, { Component } from 'react';
import xml2json from 'xml2json';

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.xml = props.xml;
    this.formDetail = JSON.parse(xml2json.toJson(props.xml));
  }
  render() {
    return (<form>
      <div className="title">{this.formDetail.ccb_api.response.forms.form.title}</div>
    </form>);
  }
}