const axios = require("axios").default;

// const usersPromises = axios.get("https://jsonplaceholder.typicode.com/users");

const postPromise = axios.get("https://jsonplaceholder.typicode.com/posts/12");

postPromise
  .then((response) => {
    const id = response.data.userId;

    return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
  })
//   .then(null, () => {
//     console.log("No encontramos el post");
//   })
  .then((response) => {
    console.log(response.data.id);
    console.log(response.data.name);
  })
  .catch((error) => {
    console.log({ error: error?.response?.status });
  });
