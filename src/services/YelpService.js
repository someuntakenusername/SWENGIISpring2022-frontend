/*
Client ID
5vP_XXknymk8FCqhrLdV_A

API Key
h5ZnJC2Z6QNEZt6iLSxW83zkQr6Obcb6WuP-rlxKw-8xU3mInevlmRnlBrs3M95W6FSR9ORrOslSlEO8YUZOB5wwf6nmplIf2ZBq2GAIXRAZi9JbPvkxEkm3Pn4WYnYx
*/
import axios from 'axios'

const apiKey = "h5ZnJC2Z6QNEZt6iLSxW83zkQr6Obcb6WuP-rlxKw-8xU3mInevlmRnlBrs3M95W6FSR9ORrOslSlEO8YUZOB5wwf6nmplIf2ZBq2GAIXRAZi9JbPvkxEkm3Pn4WYnYx"
const corsAnywhere = "http://127.0.0.1:8080/";

export default async function searchYelp(cost, rating, reviews, contact, location) {
  const USERS_REST_API_URL = 'http://localhost:80/locations/' + cost + "/" + rating + "/" + reviews + "/" + contact + "/" + location;
  return(axios.get(USERS_REST_API_URL));
}