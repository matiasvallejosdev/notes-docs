const request = require("request");

function get(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

get("https://jsonplaceholder.typicode.com/users").then(
  (body) => {
    console.log({ body });
  },
  (error) => {
    console.error(error);
  }
);
