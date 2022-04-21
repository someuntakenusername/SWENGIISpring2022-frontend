import axios from 'axios'
const reviews = 'https://blueflannel-backend.herokuapp.com/review/getreviews/';
const createReview = 'https://blueflannel-backend.herokuapp.com/review/createreview';



export function getReviewID(id){
    return axios.get(reviews + id);
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