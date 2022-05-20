/*
JavaScript gives us the functions JSON.stringify and JSON.parse 
to convert data to and from this format. The first takes a
JavaScript value and returns a JSON-encoded string. 
The second takes such a string and converts it to the value 
it encodes.
*/

let myJson = {
    name: "Matias",
    age: 22,
    status: {
        httpStatus: 200,
        description: "OK"
    }
}

// Parse data object to JSON string
let myJsonString = JSON.stringify(myJson);
console.log(myJsonString);

// Parse JSON string to data object
let myObjectJson = JSON.parse(myJsonString);
console.log(myObjectJson.status);

let pokeResponse = `{
    "Name": "Pokeball", 
    "Type": "Pokemon", 
    "Status": 200
}`
console.log(JSON.parse(pokeResponse));