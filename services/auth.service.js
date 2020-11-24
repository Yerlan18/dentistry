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
                if (response.data.accessToken) {
                    localStorage.setItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTYwNjA5ODcyMX0.LVUf9mQ-MdMoOGLRxHpoOIsbcXStYTGarcZuwdN7wuY",
                        JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTYwNjA5ODcyMX0.LVUf9mQ-MdMoOGLRxHpoOIsbcXStYTGarcZuwdN7wuY");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTYwNjA5ODcyMX0.LVUf9mQ-MdMoOGLRxHpoOIsbcXStYTGarcZuwdN7wuY'));
    }
}

export default new AuthService();
