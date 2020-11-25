import axios from "axios";



class requestService {
    getRequest(){
        return axios.get(API_URL, {headers: {Authorization: localStorage.getItem('authtoken')}}).then(
            response => {
                console.log('response',response.data)
            }
        )
    }
}

export default new requestService();
