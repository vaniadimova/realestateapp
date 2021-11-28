import axios from "axios";

 export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get ((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'aa60a2e2c3msh0dedcc4bc88dd93p1c8a80jsn1b1b5a999f68'
          }
    });
    return data;
}




//headers: {
  //  'x-rapidapi-host': 'bayut.p.rapidapi.com',
    //'x-rapidapi-key': 'aa60a2e2c3msh0dedcc4bc88dd93p1c8a80jsn1b1b5a999f68'
  //}