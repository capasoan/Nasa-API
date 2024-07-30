const API_KEY = "wcuxyoeN6uw0H4TbCKPNKAZ3VUKstgnfMV84t4AK";
const API_URL = "https://api.nasa.gov/planetary/apod";
import axios from 'axios';

export default async (urlParams = "") => {
    try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}${urlParams}`);
        console.log("response", response.data);
        return response.data;
    } catch (error) {
        console.error( error);
    }
};
