import Profile from "./Profile";
import {
    addPostActionCreator, getStatusTC,
    setPostTextActionCreator,
    setProfileActionCreator,
    setStatusTC
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {profileAPI} from "../../api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        userId = !userId ? this.props.myId : userId;
        profileAPI.getProfile(userId).then(
            response => {
                this.props.setProfile(response);
            }
        );
    }

    render() {
        // const location = this.props.location.pathname;
        // console.log('location: ' + location);

        return (
            <div>
                {!this.props.state.profile ? <Preloader/> :
                    <Profile
                        state={this.props.state}
                        changePostText={this.props.changePostText}
                        addPost={this.props.addPost}
                        setStatus={this.props.setStatus}
                        myId={this.props.myId}
                    />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.profilePage,
        myId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {
        changePostText: setPostTextActionCreator,
        addPost: addPostActionCreator,
        setProfile: setProfileActionCreator,
        setStatus: setStatusTC,
    }),
    withRouter,
    withAuthRedirectHOC,
)(ProfileContainer);