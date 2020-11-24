import axios from "axios";

const API_URL = "http://localhost:3000/api/getAppointments";

class requestService {
    getRequest(){
        return axios.get(API_URL, {headers: {Authorization: localStorage.getItem('authtoken')}}).then(
            response => {
                console.log(response.data)
            }
        )
    }
}

export default new requestService();
