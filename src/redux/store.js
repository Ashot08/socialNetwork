import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        dialogsPage: {
            threadsData: [
                {id: 1, name: "Друзь"},
                {id: 2, name: "Иван"}
            ],
            dialogTextareaText: '',
            dialogsData: [
                {id: 1, message: 'Друзь говорит тебе'},
                {id: 2, message: 'Иван молчит'},
                {id: 3, message: 'Ok'},
                {id: 4, message: 'Not now'},
            ],
        },
        profilePage: {
            postText: '',
            postsData: [
                {id: 1, message: '1 message'},
                {id: 2, message: '2 message'},
                {id: 3, message: '3 message'},
                {id: 4, message: '4 message'},
            ],
        }
    },
    dispatch(action) {
        profileReducer(action, this.getState().profilePage);
        dialogsReducer(action, this.getState().dialogsPage);

        this.callSubscriber(this);//в реальности редакс не передает никаких аргументов в методе callSubscriber
    },
    getState() {
        return this._state;
    },
    callSubscriber() {
        //
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    }
}

export default store;
