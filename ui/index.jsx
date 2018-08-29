// component.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { FaPencilAlt } from 'react-icons/fa';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            isCheckedIn: false
        };
    }
    render() {
        return (
            <div className={'row'}>
                <div className={'col'}>{this.state.name}</div>
                <div className={'col'}><button className={'btn-primary'}><FaPencilAlt/></button></div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className={'container card-header'}>
                <div className={'row'}>
                    <div className={'col'}>Check In</div>
                </div>
                <Member name="Lisa Yi" />
                <Member name="Mary Gunderson" />
                <Member name="Lucas Rose" />
                <Member name="George Fouché" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
