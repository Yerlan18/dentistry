import axios from "axios";

const API_URL = "http://localhost:3000/api/login";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL, {
                username,
                password
            })
            .then(response => {
                console.log(response.data.authToken);
                if (response.data.authToken) {
                    localStorage.setItem('authtoken',
                        response.data.authToken);
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('authtoken');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('authtoken'));
    }
}

export default new AuthService();
