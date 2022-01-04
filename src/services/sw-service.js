import axios from 'axios';

export const swService = async (type, step, saveData) => {
  const api = `https://swapi.dev/api/${type}/${step}`;
  return axios
    .get(api)
    .then((resp) => {
      saveData(resp.data);
    })
    .catch(error => console.log(error));
};

export const swImage = (type, step) => {
  return `https://starwars-visualguide.com/assets/img/${type}/${step}.jpg`;
};
