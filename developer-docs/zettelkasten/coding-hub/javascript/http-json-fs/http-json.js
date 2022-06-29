// Live server is a simple server that runs in the background and reloads the page when a file changes.
// It is useful for testing and development.
// var liveServer = require('live-server'); // npm install live-server

// Create a directory for your project, cd into the directory and initialize a Node project with default settings:
// This will create a package.json file in the directory. Next, install node-fetch as shown above and add an index.js file.
// https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/

import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data) => {
        console.log(typeof(data));
        // console.log(JSON.stringify(data));
        for(let key in data){
            let person = `${data[key].name} with ${data[key].email}`;
            console.log(person);
        }
    });
