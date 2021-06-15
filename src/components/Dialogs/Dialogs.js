import classes from './Dialogs.module.css';
import Thread from "./Thread/Thread";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let threads = props.state.threadsData.map(t => <Thread name={t.name} id={t.id}/>);
    let dialogs = props.state.dialogsData.map(d => <DialogItem message={d.message}/>);

    let changeDialogText = (e) => {
        props.changeDialogText(e.target.value);
    }
    let addMessage = () => {
        props.addMessage();
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.threads}>
                {threads}
            </div>
            <div className={classes.dialog}>
                {dialogs}
                <div>
                    <div>
                        <textarea onChange={changeDialogText} value={props.dialogTextareaText}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
