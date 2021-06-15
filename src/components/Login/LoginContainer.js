import {connect} from "react-redux";
import {Login, LogOutForm} from "./Login";
import {logInTC, logOutTC} from "../../redux/authReducer";

const LoginContainer = (props) => {
    return (props.isAuth) ? <LogOutForm isAuth={props.isAuth} logOut={props.logOut}/> :
        <Login errorMessages={props.errorMessages} logIn={props.logIn}/>
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessages: state.auth.errorMessages,
    }
}
export default connect(mapStateToProps, {logOut: logOutTC, logIn: logInTC})(LoginContainer);