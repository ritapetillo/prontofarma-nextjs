import axios from "axios";

interface Location {
  name: string;
  state: string;
  zipcode: string;
  address: string;
  country: string;
  city: string;
}

export const getCoordinates = async (location: string) => {
  try {
    const res = await axios(
      `https://eu1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_KEY}&q=${location},Campania,Italy&format=json`
    );
    const { data } = await res;
    console.log(data);
    const { lat, lon } = data[0];
    return { latitude: lat, longitude: lon };
  } catch (err) {
    console.log(err);
  }
};
