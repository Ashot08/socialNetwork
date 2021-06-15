const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_DIALOG_TEXTAREA_TEXT = 'SET-DIALOG-TEXTAREA-TEXT';

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
}
export const setDialogTextareaTextActionCreator = (text) => {
    return {type: SET_DIALOG_TEXTAREA_TEXT, text: text};
}
let defaultState = {
    threadsData: [
        {id: 1, name: "Друзь"},
        {id: 2, name: "Иван"}
    ],
    dialogTextareaText: 'default value',
    dialogsData: [
        {id: 1, message: 'Друзь говорит тебе'},
        {id: 2, message: 'Иван молчит'},
        {id: 3, message: 'Ok'},
        {id: 4, message: 'Not now'},
    ],
}
const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.dialogTextareaText) {
                return {
                    ...state,
                    dialogsData: [...state.dialogsData, {id: 1, message: state.dialogTextareaText}],
                    dialogTextareaText: '',
                }
            } else return state;
        case SET_DIALOG_TEXTAREA_TEXT:
            return {
                ...state,
                dialogTextareaText: action.text,
            }
        default:
            return state;
    }
}
export default dialogsReducer;