// component.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { FaPencilAlt, FaSave } from 'react-icons/fa';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            isCheckedIn: false,
            isEditing: false
        };
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCheckinClick = this.handleCheckinClick.bind(this);
    }

    handleEditClick() {
        this.setState(Object.assign(this.state, {isEditing:true}))
    }

    handleSaveClick() {
        this.setState(Object.assign(this.state, {isEditing:false}))
    }

    handleNameChange(e) {
        this.setState(Object.assign(this.state, {name:e.target.value}))
    }

    handleCheckinClick(e) {
        this.setState(Object.assign(this.state, {isCheckedIn:e.target.checked}))
    }

    renderEdit() {
        console.log('state', this.state);
        return (
            <div className={'row'}>
                <div className="col"><input value={this.state.name} onChange={this.handleNameChange}/></div>
                <div className="col">Checked in? <input type="checkbox" onChange={this.handleCheckinClick} checked={this.state.isCheckedIn}/></div>
                <div className="col"><button className="btn-primary" onClick={this.handleSaveClick}><FaSave/></button></div>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className={'row'}>
                <div className="col">{this.state.name}</div>
                <div className="col">
                    <button className="btn-primary" onClick={this.handleEditClick}>
                        <FaPencilAlt/>
                    </button>
                </div>
            </div>
        );
    }

    render() {
        return this.state.isEditing ? this.renderEdit() : this.renderDisplay();
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container card-header">
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
