import axios from 'axios'
const USERS_REST_API_URL = 'http://localhost:80/preference/';
const locations = 'http://localhost:80/locations/';


export function getPreferenceID(id){
    console.log(id)
    return axios.get(locations + id);
}


