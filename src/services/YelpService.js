/*
Client ID
5vP_XXknymk8FCqhrLdV_A

API Key
h5ZnJC2Z6QNEZt6iLSxW83zkQr6Obcb6WuP-rlxKw-8xU3mInevlmRnlBrs3M95W6FSR9ORrOslSlEO8YUZOB5wwf6nmplIf2ZBq2GAIXRAZi9JbPvkxEkm3Pn4WYnYx
*/

const apiKey = "h5ZnJC2Z6QNEZt6iLSxW83zkQr6Obcb6WuP-rlxKw-8xU3mInevlmRnlBrs3M95W6FSR9ORrOslSlEO8YUZOB5wwf6nmplIf2ZBq2GAIXRAZi9JbPvkxEkm3Pn4WYnYx"
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

export default async function searchYelp() {
    const url = `https://api.yelp.com/v3/businesses/search?term=Restaurants&location=Waco&sort_by=best_match`;
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
        reviewCount: business.review_count
      }
    })

    return businesses
  } else {
    throw new Error("Request failed!");
  }
}