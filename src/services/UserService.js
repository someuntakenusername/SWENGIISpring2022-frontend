import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:80/user/users';


export function getUsers(){
    return axios.get(USERS_REST_API_URL);
}
