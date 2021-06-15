import classes from './Thread.module.css';
import {NavLink} from "react-router-dom";

const Thread = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default Thread;
