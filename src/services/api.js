import axios from "axios";

/*
Getter functions
*/

export const getRandomQuote = async() => {
    try {
        const res = await axios.get('http://api.quotable.io/random');
        return res.data;
      } catch(error) {
        console.log(error);
      }
}