import React, { Component } from 'react';

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.xml = props.xml;
  }

  asHTMLForm() {
    return `<form>
<div class="title">Connection Card</div>
</form>
`;
  }

  render() {
    return (<form>
      <div className="title">Connection Card</div>
    </form>);
  }
}