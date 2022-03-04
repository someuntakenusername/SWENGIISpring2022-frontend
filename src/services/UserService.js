import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:80/user/users';
const USERS_LASTNAME_REST_API_URL = 'http://localhost:80/user/';

class UserService {
    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    searchByLastName(name){
        console.log(USERS_LASTNAME_REST_API_URL + name)
        return axios.get(USERS_LASTNAME_REST_API_URL + name);
    }
}

export default new UserService();