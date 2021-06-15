import classes from './Aside.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Aside = (props) => {
    return (
        <aside className={classes.aside}>
            <ul>
                <li><NavLink to={'/profile/' + props.myId}>Profile</NavLink></li>
                <li><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li>third</li>
            </ul>
        </aside>
    );
}
const mapStateToProps = (state) => {
    return {
        myId: state.auth.id
    }
}
export default connect(mapStateToProps)(Aside);
