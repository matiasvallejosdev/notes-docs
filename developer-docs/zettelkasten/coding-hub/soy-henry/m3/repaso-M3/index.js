const express = require("express");
const res = require("express/lib/response");
const server = express();
const morgan = require("morgan");

const PATH = "/post";
let id = 4;

let users = [
  { id: 1, name: "Cesar"},
  { id: 2, name: "Martina"},
  { id: 3, name: "Daniel"},
];

function logger(req, res, next) {
  console.log(req.url);
  next();
}

server.use(morgan("tiny"));
//Lo vamos a usar para interpretar la informacion que llega por body, ya que la misma
// llega en un formato json, y el json por si solo no puede ser interpretado. El middleware
// se encargara de transformarlo a un objeto.
server.use(express.json());

server.get(PATH, logger, (req, res, next) => {
  console.log("previo al next");
  next();
});

server.get(PATH, (req, res) => {
  res.send("Hola, Bienvenidos pelotudos luego del next");
});

server.get(`${PATH}/json`, (req, res) => {
  res.json("Funciono pa, en la ruta json");
});

server.get("/send", (req, res) => {
  // Content-Type: application/json
  // res.send({message: 'I am sending', anotherMessage: 'me too'})

  // Content-Type: no definido
  // res.send(undefined);
  // res.send(null);

  res.send("Hola");
});

server.get("/uno/:id/:apellido", (req, res) => {
  const { id, apellido } = req.params;

  const nId = Number(id); // porque todo llega como un string en params, por body si lo convierte en number

  const { name } = req.query; // .query llega mediante la información de la url cuando colocamos el signo ?
  // localhost:3000/uno/id/algo?name=cesar&?apellido=cottua

  if (!name) {
    return res.status(404).json({ message: "No se obtuvo ningun nombre" }); //json porque llega por query
  }

  console.log(typeof nId);

  if (nId > 5) {
    return res.status(404).send({ message: "El id es mayor a 5" }); // aca sería send porque llega por params/body.
  }

  res.send(`${name} ${apellido} con el id(${nId})`);
});

server.post("/post", (req, res) => {
  console.log(req.body);
  const { author, title, contents, id } = req.body;

  res.send(
    `el autor: ${author}, le puso como titulo: ${title}, con el id(${id})`
  );
});

server.post("/addUsers/:name", (req, res) => {
  const { name } = req.params;
  const { location, age } = req.body;
  //sendStatus solo envia el estado
  // y el status envia el estado
  // y otro parametro que se usa como mensaje

  if (!location || !age) return res.sendStatus(404);
  users.push({id: id++, name, location, age});

  
//   res.json(users);
  res.send(users);
});

server.post('/search/:id',(req,res)=>{
    let id = req.params.id;
    // filter = devuelve un nuevo arreglo
    // find = devuelve el primer objeto que coincida
    // map = devuelve un nuevo array
    let find =users.find((n)=> n.id === Number(id));

    
    res.send(find.name);
})

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
