import axios from 'axios';


export const getMovies = async () => {
    const movies = await axios.get('https://mocki.io/v1/cd6ef37c-2822-47dc-8a14-606d5edc9fa5');
    return movies.data;
};


export const getShortTeasers = async () => {
    const teasers = await axios.get("https://mocki.io/v1/b39c9ae6-2240-4dfa-8249-97d95f13fe95");
    return teasers.data;
};