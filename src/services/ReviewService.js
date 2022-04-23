import axios from 'axios'
const reviews = 'https://blueflannel-backend.herokuapp.com/review/getreviews/';
const createReview = 'https://blueflannel-backend.herokuapp.com/review/createreview';
const createLocations = 'https://blueflannel-backend.herokuapp.com/locations/createlocation';
const removeLocations = 'https://blueflannel-backend.herokuapp.com/locations/userlocation/remove';



export function getReviewID(id){
    return axios.get(reviews + id);
}

export function removeLocation(locationID, userID){
    return axios.get(removeLocations + "/" + locationID + "/" + userID);
}

export function leaveReview(id, review){
    const reviewDTO = {
        locationID: id,
        reviewText: review
      };
      
      axios.post(createReview, reviewDTO).then(async(res) => {
       var review = await res.data;
        console.log(review)
    });
}

export function createLocation(cost, name, address, phone, userID){
    const reviewDTO = {
        cost: cost,
        name: name,
        address: address,
        phone: phone,
        userID: userID
      };
      
      axios.post(createLocations, reviewDTO).then(async(res) => {
       var review = await res.data;
        console.log(review)
    });
}