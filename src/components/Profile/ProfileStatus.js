import React from 'react';
import {profileAPI} from "../../api";

export class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusEnable: false,
            status: '---',
        }
    }

    componentDidMount() {
        profileAPI.getStatus(this.props.userId).then(
            response => {
                this.setState({status: response || 'Статус'});
            }
        )
    }

    isChangeable = () => {
        if (this.props.userId === this.props.myId) {
            return true
        }
    }
    statusEnable = () => {
        if (this.isChangeable()) {
            this.setState({statusEnable: true});
        }
    }
    statusDisable = () => {
        this.setState({statusEnable: false});
    }
    setStatus = (e) => {
        this.props.setStatus(e.target.value);
    }
    setLocalStatus = (e) => {
        this.setState({
            status: e.target.value
        });
    }
    onStatusChange = (e) => {
        this.statusDisable();
        this.setStatus(e);
    }

    render() {
        return <div>
            {!this.state.statusEnable ?
                <div onDoubleClick={this.statusEnable}>{this.state.status}</div> :
                <input autoFocus={true} onBlur={this.onStatusChange} onInput={this.setLocalStatus} type="text"
                       value={this.state.status}/>}
        </div>
    }
}