import {profileAPI} from "../api";

const ADD_POST = 'ADD-POST';
const SET_POST_TEXT = 'SET-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';

export const addPostActionCreator = () => {
    return {type: ADD_POST};
}
export const setPostTextActionCreator = (text) => {
    return {type: SET_POST_TEXT, text: text};
}
export const setProfileActionCreator = (profileData) => {
    return {type: SET_PROFILE, profileData}
}
export const setStatusTC = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(
            response => {

            }
        );
    }
}

let defaultState = {
    postText: 'default value',
    postsData: [
        {id: 1, message: '1 message'},
        {id: 2, message: '2 message'},
        {id: 3, message: '3 message'},
        {id: 4, message: '4 message'},
    ],
    profile: null,
    status: ''
}
const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: 1, message: state.postText}],
                postText: '',
            }
        }
        case SET_POST_TEXT: {
            return {
                ...state,
                postText: action.text,
            }
        }
        case SET_PROFILE:
            return {
                ...state,
                profile: {...action.profileData}
            }

        default:
            return state;
    }
}
export default profileReducer;