import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'd5ed11ef-a3c3-4e5b-b792-c2c571720e0f',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});
const instance2 = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'd5ed11ef-a3c3-4e5b-b792-c2c571720e0f',
    },
    baseURL: 'https://detinakuhne.ru/wp-json',
});
export const usersAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`, {}).then(
            response => {
                return response.data;
            }
        );
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(
            response => {
                return response.data;
            }
        );
    },
    getUsers(currentPage = 1) {
        return instance.get(`users?page=${currentPage}`).then(
            response => {
                return response.data
            }
        );
    },
    isAuth() {
        console.warn('deprecated method, no more supported, use authAPI.isAuth()')
        return authAPI.isAuth();
    },

}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(
            response => response.data
        );
    },
    setStatus(status) {
        return instance.put(`profile/status`, {status}).then(
            response => {
                return response.data;
            }
        );
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(
            response => {
                return response.data;
            }
        );
    }
}

export const authAPI = {
    isAuth() {
        return instance.get(`auth/me`).then(
            response => {
                return response.data;
            }
        );
    },
    logOut() {
        return instance.post(`auth/logout`, {}).then(
            response => {
                return response.data;
            }
        );
    },
    logIn(data) {
        return instance.post(`auth/login`, {...data}).then(
            response => {
                return response.data;
            }
        );
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url`).then(
            response => {
                return response.data;
            }
        );
    }
}
// export const testWP = {
//     getWpJson(){
//         return instance2.get(`` ).then(
//             response => {
//                 return response.data;
//             }
//         );
//     },
//
// }