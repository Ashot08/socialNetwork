import {usersAPI} from "../api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SELECT_PAGE = 'SELECT_PAGE';
const TOGGLE_LOADER = 'TOGGLE_LOADER';
const TOGGLE_FOLLOW_BUTTON_DISABLE = 'TOGGLE_FOLLOW_BUTTON_DISABLE';

export const followActionCreator = (userId) => {
    return {type: FOLLOW, userId};
}
export const unfollowActionCreator = (userId) => {
    return {type: UNFOLLOW, userId};
}
export const setUsersActionCreator = (users) => {
    return {type: SET_USERS, users}
}
export const selectPageActionCreator = (pageNumber) => {
    return {type: SELECT_PAGE, pageNumber}
}
export const toggleLoaderActionCreator = (isLoading) => {
    return {type: TOGGLE_LOADER, isLoading}
}
export const toggleFollowButtonDisableActionCreator = (isLoading, id) => {
    return {type: TOGGLE_FOLLOW_BUTTON_DISABLE, isLoading, id}
}
export const getUsersTC = (currentPage) => {
    return (dispatch) => {
        dispatch(toggleLoaderActionCreator(true));
        usersAPI.getUsers(currentPage).then(
            response => {
                dispatch(setUsersActionCreator(response.items));
                dispatch(toggleLoaderActionCreator(false));
            }
        );
        dispatch(selectPageActionCreator(currentPage));
    }
}
export const followTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowButtonDisableActionCreator(true, userId));
        usersAPI.follow(userId).then(
            data => {
                if (data.resultCode === 0) dispatch(followActionCreator(userId));
                dispatch(toggleFollowButtonDisableActionCreator(false, userId));
            }
        )
    }
}
export const unfollowTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowButtonDisableActionCreator(true, userId));
        usersAPI.unfollow(userId).then(
            data => {
                if (data.resultCode === 0) dispatch(unfollowActionCreator(userId));
                dispatch(toggleFollowButtonDisableActionCreator(false, userId));
            }
        )
    }
}
let defaultState = {
    usersData: [],
    totalCount: 280,
    countPerPage: 10,
    currentPage: 1,
    isLoading: false,
    toggleFollowingIds: []
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: [...state.usersData.map(u => u.id === action.userId ? {...u, followed: true} : u)],
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: [...state.usersData.map(u => u.id === action.userId ? {...u, followed: false} : u)],
            }
        }
        case SET_USERS:
            return {
                ...state,
                usersData: [...action.users],
            }
        case SELECT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        case TOGGLE_LOADER:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case TOGGLE_FOLLOW_BUTTON_DISABLE:
            return {
                ...state,
                toggleFollowingIds: (action.isLoading) ? [...state.toggleFollowingIds, action.id] : state.toggleFollowingIds.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export default usersReducer;