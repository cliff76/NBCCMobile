// component.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { FaPencilAlt } from 'react-icons/fa';

class App extends React.Component {
    render() {
        return (
            <div className={'container card-header'}>
                <div className={'row'}>
                    <div className={'col'}>Check In</div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>Mary Gunderson</div>
                    <div className={'col'}><button className={'btn-primary'}><FaPencilAlt/></button></div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>Lucas Rose</div>
                    <div className={'col'}><button className={'btn-primary'}><FaPencilAlt/></button></div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>George Fouché</div>
                    <div className={'col'}><button className={'btn-primary'}><FaPencilAlt/></button></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
