import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {usersAPI} from "../api";
import {setLoginDataActionCreator} from "../redux/authReducer";

export const withAuthRedirectHOC = (Component) => {
    class redirectContainer extends React.Component {
        componentDidMount() {
            usersAPI.isAuth().then(
                response => {
                    if (response.resultCode === 0) {
                        let {email, id, login} = response.data;
                        this.props.setLoginData({id, email, login});
                    }
                }
            );
        }

        render() {
            return this.props.isAuth ? <Component {...this.props} /> : <Redirect to={'/login'}/>;
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }
    return connect(mapStateToProps, {setLoginData: setLoginDataActionCreator,})(redirectContainer);
}