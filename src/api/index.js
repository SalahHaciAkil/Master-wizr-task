import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/photos";
const numOfObjects = 6;

const getData = () => {
  return axios.get(url).then(({ data }) => {
    const returnedData = [];
    for (let i = 0; i < numOfObjects; i++) {
      returnedData.push(data[i]);
    }
    return returnedData;
  });
};

const apiMethods = {
  getData,
};

export default apiMethods;
