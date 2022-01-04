import axios from 'axios';

export const swService = (type, step) => {
  const api = `https://swapi.dev/api/${type}/${step}`;
  return axios
    .get(api)
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => console.error(error));
};

export const swImage = (type, step) => {
  return `https://starwars-visualguide.com/assets/img/${type}/${step}.jpg`;
};
