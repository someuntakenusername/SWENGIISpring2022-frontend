/*
Client ID
5vP_XXknymk8FCqhrLdV_A

API Key
h5ZnJC2Z6QNEZt6iLSxW83zkQr6Obcb6WuP-rlxKw-8xU3mInevlmRnlBrs3M95W6FSR9ORrOslSlEO8YUZOB5wwf6nmplIf2ZBq2GAIXRAZi9JbPvkxEkm3Pn4WYnYx
*/

const apiKey = "h5ZnJC2Z6QNEZt6iLSxW83zkQr6Obcb6WuP-rlxKw-8xU3mInevlmRnlBrs3M95W6FSR9ORrOslSlEO8YUZOB5wwf6nmplIf2ZBq2GAIXRAZi9JbPvkxEkm3Pn4WYnYx"
const corsAnywhere = "http://127.0.0.1:8080/";

export default async function searchYelp(cost, rating, reviews, contact, location) {
  console.log(location)
    const url = 'https://api.yelp.com/v3/businesses/search?categories=skiresorts&location=' + location + '&limit=50&sort_by=best_match';
    console.log(url);
    const data = await fetch(`${corsAnywhere}${url}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const response = await data.json();
  if (response) {
    const businesses = response.businesses.map((business) => {
      return {
        id: business.id,         
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories,
        rating: business.rating,
        reviewCount: business.review_count,
        price: business.price,
        distance: business.distance,
        phone: business.display_phone,
        rank: -1
      }
    })
    console.log(businesses);
    const priceSort = [...businesses];
    priceSort.sort((a,b) => {
      if (a.price === undefined){
        a.price = 100;
      }
      if (b.price === undefined){
        b.price = 100;
      }
      var ap = Math.abs(a.price.length - cost);
      var bp = Math.abs(b.price.length - cost);
      if (ap < bp) {
        return -1;
      }else if (bp < ap){
        return 1;
      }else{
        return 0;
      }
    })
    const ratingSort = [...businesses];
    ratingSort.sort((a,b) => {
      var ap = Math.abs(a.rating - rating);
      var bp = Math.abs(b.rating - rating);
      if (ap < bp) {
        return -1;
      }else if (bp < ap){
        return 1;
      }else{
        return 0;
      }
    })
    const numberSort = [...businesses];
    numberSort.sort((a,b) => {
      var asmall = false;
      var bsmall = false;
      if (a.reviewCount < reviews){
        asmall = true;  
      }
      if (b.reviewCount < reviews){
        bsmall = true;  
      }
      
      if (asmall && bsmall) {
        return 0;
      }else if (asmall && !bsmall){
        return -1;
      }else if (bsmall && !asmall){
        return 1;
      }else if (!bsmall && !asmall){
        if (bsmall < asmall){
          return 1;
        }else if (asmall < bsmall){
          return -1;
        }else{
          return 0;
        }
      }else{
        return 0;
      }
    })
    const distanceSort = [...businesses];
    distanceSort.sort((a,b) => {
      if (a.distance < b.distance) {
        return -1;
      }else if (b.distance < a.distance){
        return 1;
      }else{
        return 0;
      }
    })
    for (let index = 0; index < businesses.length; index++) {
      const elemento = businesses[index].id;
      let distanceRank;
      let numberRank;
      let ratingRank;
      let priceRank;
      let contactRank = 0;

      for (let index2 = 0; index2 < priceSort.length; index2++) {
        const elementi = priceSort[index2].id;
        if (elementi === elemento){
          priceRank = index2;
        }
      }
      for (let index2 = 0; index2 < distanceSort.length; index2++) {
        const elementi = distanceSort[index2].id;
        if (elementi === elemento){
          distanceRank = index2;
        }
      }
      for (let index2 = 0; index2 < numberSort.length; index2++) {
        const elementi = numberSort[index2].id;
        if (elementi === elemento){
          numberRank = index2;
        }
      }
      for (let index2 = 0; index2 < ratingSort.length; index2++) {
        const elementi = ratingSort[index2].id;
        if (elementi === elemento){
          ratingRank = index2;
        }
      }
        
      if (businesses[index].phone){
        contactRank = -1;
      }
     
      businesses[index].rank = (distanceRank + numberRank + ratingRank + priceRank + contactRank) / 5;
      
    }

    businesses.sort((a,b) => {
      if (a.rank < b.rank) {
        return -1;
      }else if (b.rank < a.rank){
        return 1;
      }else{
        return 0;
      }
    })
    console.log(businesses);
    return businesses
  } else {
    throw new Error("Request failed!");
  }
}