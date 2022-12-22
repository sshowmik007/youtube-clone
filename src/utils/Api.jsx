
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        'X-RapidAPI-Key': '2cf0412acemsh06be4fe761eeae1p1f30e6jsnb58679c622d3',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};