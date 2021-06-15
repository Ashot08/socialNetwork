import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setLoginDataActionCreator} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.auth
    }
}

export default connect(mapStateToProps, {setLoginData: setLoginDataActionCreator,})(HeaderContainer);