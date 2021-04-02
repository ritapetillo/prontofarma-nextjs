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
      `${process.env.POSITIONSTACK_API_URI}forward?access_key=${process.env.POSITIONSTACK_API_KEY}&query=${location},Campania,Italy`
    );
    const { data } = await res.data;
    const { latitude, longitude } = data[0];
    return { latitude, longitude };
  } catch (err) {
    console.log(err);
  }
};
