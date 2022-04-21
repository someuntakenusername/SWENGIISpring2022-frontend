import axios from 'axios'
const USERS_REST_API_URL = 'https://blueflannel-backend.herokuapp.com/preference/';
const locations = 'https://blueflannel-backend.herokuapp.com/locations/';
const preference = 'https://blueflannel-backend.herokuapp.com/preference/';


export function getPreferenceID(id){
    return axios.get(locations + id);
}

export function getPreference(id){
    return axios.get(preference + id);
}


