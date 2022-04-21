import axios from 'axios'
const bookmark = 'https://blueflannel-backend.herokuapp.com/bookmark/';


export function getbookmarks(id){
    return axios.get(bookmark + id);
}

export function createBookmark(locationID, userID){

    const bookmarkDTO = {
        locationID: locationID,
        userID: userID
      };
      
      axios.post(bookmark + "createbookmark", bookmarkDTO).then(async(res) => {
       var bookmark = await res.data;
        console.log(bookmark)
    });
}

export function removeBookmark(locationID, userID){

    const bookmarkDTO = {
        locationID: locationID,
        userID: userID
      };
      
      axios.post(bookmark + "removebookmark", bookmarkDTO).then(async(res) => {
       var bookmark = await res.data;
        console.log(bookmark)
    });
}


