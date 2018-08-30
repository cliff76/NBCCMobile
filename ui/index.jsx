// component.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { FaPencilAlt, FaSave } from 'react-icons/fa';

function EditMember(props) {
    let text = undefined, checkbox = undefined;
    return (
        <div className={'row'}>
            <div className="col">
                <input value={props.member.name}  ref={ input => text = input}
                       onChange={() => props.handleNameChange(props.member.id, text.value)}/>
            </div>
            <div className="col">
                Checked in?
                <input type="checkbox" ref={ input => checkbox = input}
                       onChange={() => props.handleCheckinClick(props.member.id, checkbox.checked)}
                       checked={props.member.isCheckedIn}/>
            </div>
            <div className="col">
                <button className="btn-primary"
                        onClick={()=> props.handleSaveClick(props.member.id)}>
                    <FaSave/>
                </button>
            </div>
        </div>
    )
}

function Member(props) {
        return (
            <div className={'row'}>
                <div className="col">{props.member.name}</div>
                <div className="col">
                    <button className="btn-primary" onClick={() => props.handleEditClick(props.member.id)}>
                        <FaPencilAlt/>
                    </button>
                </div>
            </div>
        );
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
