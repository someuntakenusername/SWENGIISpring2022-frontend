/*
Client ID
5vP_XXknymk8FCqhrLdV_A

API Key
h5ZnJC2Z6QNEZt6iLSxW83zkQr6Obcb6WuP-rlxKw-8xU3mInevlmRnlBrs3M95W6FSR9ORrOslSlEO8YUZOB5wwf6nmplIf2ZBq2GAIXRAZi9JbPvkxEkm3Pn4WYnYx
*/

const apiKey = "AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE"
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

export default async function searchPlaces() {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Wac&language=en&components=country:in|country:us&&key=AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE`;
    const data = await fetch(`${corsAnywhere}${url}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const response = await data.json();

  if (response) {
        console.log(response.predictions);
    }

    return response.predictions

}