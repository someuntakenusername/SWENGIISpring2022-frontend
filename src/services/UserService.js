import axios from 'axios'

const USERS_REST_API_URL = 'https://blueflannel-backend.herokuapp.com/user/users';


export function getUsers(){
    return axios.get(USERS_REST_API_URL);
}
