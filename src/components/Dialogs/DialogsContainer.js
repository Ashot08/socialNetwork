import Dialogs from "./Dialogs";
import {addMessageActionCreator, setDialogTextareaTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        dialogTextareaText: state.dialogsPage.dialogTextareaText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeDialogText: (value) => {
            dispatch(setDialogTextareaTextActionCreator(value));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
    }
}/*
const DialogsWithAuthRedirect = withAuthRedirectHOC(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirect);*/
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);
/*export default DialogsContainer;*/