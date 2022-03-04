const apiKey = "AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE"
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

export default async function searchPlaces() {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Tex&language=en&components=country:in|country:us&&key=AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE`;
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