import axios from "axios";


const owner = 'https://blueflannel-backend.herokuapp.com/owner/';


export function getOwnerById(id){
    return axios.get(owner + id);
}


export function createOwner(id){
    const reviewDTO = {
        id: id
      };
      
      axios.post(owner + "createowner", reviewDTO).then(async(res) => {
       var owner = await res.data;
            console.log(owner)
    });
}