import {connect} from "react-redux";
import {
    followTC, getUsersTC, toggleFollowButtonDisableActionCreator, toggleLoaderActionCreator, unfollowTC
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";

export class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage);
    }

    render() {
        return (<div>
                {this.props.isLoading ? <Preloader/> :
                    <Users
                        users={this.props.users}
                        totalCount={this.props.totalCount}
                        countPerPage={this.props.countPerPage}
                        currentPage={this.props.currentPage}
                        toggleFollowingIds={this.props.toggleFollowingIds}

                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        setCurrentPage={this.props.getUsers}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
        ,
        totalCount: state.usersPage.totalCount
        ,
        countPerPage: state.usersPage.countPerPage
        ,
        currentPage: state.usersPage.currentPage
        ,
        isLoading: state.usersPage.isLoading
        ,
        toggleFollowingIds: state.usersPage.toggleFollowingIds,

    }
}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
    }
}*/

export default connect(mapStateToProps, {
    toggleLoader: toggleLoaderActionCreator,
    toggleFollowButtonDisable: toggleFollowButtonDisableActionCreator,
    getUsers: getUsersTC,
    follow: followTC,
    unfollow: unfollowTC,
})(UsersContainer);
