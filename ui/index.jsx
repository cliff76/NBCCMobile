// component.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { FaPencilAlt, FaSave } from 'react-icons/fa';

class EditMember extends React.Component {

    save() {
        this.props.handleSaveClick(this.props.member.id);
    }

    checkin() {
        this.props.handleCheckinClick(this.props.member.id, this.checkbox.checked);
    }

    updateName() {
        this.props.handleNameChange(this.props.member.id, this.text.value);
    }

    render() {
        return (
            <div className={'row'}>
                <div className="col"><input value={this.props.member.name}  ref={ input => this.text = input} onChange={this.updateName.bind(this)}/></div>
                <div className="col">Checked in? <input type="checkbox" ref={ input => this.checkbox = input} onChange={this.checkin.bind(this)} checked={this.props.member.isCheckedIn}/></div>
                <div className="col"><button className="btn-primary" onClick={this.save.bind(this)}><FaSave/></button></div>
            </div>
        )
    }
}

class Member extends React.Component {

    edit() {
        this.props.handleEditClick(this.props.member.id);
    }

    render() {
        return (
            <div className={'row'}>
                <div className="col">{this.props.member.name}</div>
                <div className="col">
                    <button className="btn-primary" onClick={this.edit.bind(this)}>
                        <FaPencilAlt/>
                    </button>
                </div>
            </div>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { members:[
            { id:'1', name:'Lisa Yi', isCheckedIn:false },
            { id:'2', name:'Mary Gunderson', isCheckedIn:false },
            { id:'3', name:'Lucas Rose', isCheckedIn:false },
            { id:'4', name:'George Fouché', isCheckedIn:false }
        ]};
    }

    handleEditClick(id) {
        this.setState(prevState => ({
            members: prevState.members.map( member =>
                member.id !== id ? member : Object.assign(member, {isEditing:true})
            )
        }));
    }

    handleSaveClick(id) {
        this.setState(prevState => ({
            members: prevState.members.map( member =>
                member.id !== id ? member : Object.assign(member, {isEditing:false})
            )
        }));
    }

    handleNameChange(id, newName) {
        this.setState(prevState => ({
            members: prevState.members.map( member =>
                member.id !== id ? member : Object.assign(member, {name:newName})
            )
        }));
    }

    handleCheckinClick(id, checked) {
        this.setState(prevState => ({
            members: prevState.members.map( member =>
                member.id !== id ? member : Object.assign(member, {isCheckedIn:checked})
            )
        }));
    }

    eachMember(member) {
        return member.isEditing ?
            (<EditMember key={member.id} member={member}
                         handleSaveClick={this.handleSaveClick.bind(this)}
                         handleNameChange={this.handleNameChange.bind(this)}
                         handleCheckinClick={this.handleCheckinClick.bind(this)}
            />) :
            (<Member key={member.id} member={member}
                     handleEditClick={this.handleEditClick.bind(this)}
            />);
    }

    render() {
        console.log('State:', this.state);
        return (
            <div className="container card-header">
                <div className={'row'}>
                    <div className={'col'}>Check In</div>
                </div>
                {this.state.members.map(this.eachMember.bind(this))}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
