import classes from './DialogItem.module.css';


const DialogItem = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
}

export default DialogItem;
