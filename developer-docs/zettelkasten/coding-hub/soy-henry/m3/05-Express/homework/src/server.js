// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();

// to enable parsing of json bodies for post requests
server.use(express.json());

//server.METHOD (URL (reqres,next) =>{})
/* IMPORTANTE si vamos a trabajar con req.body, es decir vamos a recibir informacion por body, NO NOS PODEMOS OLVIDAR EL MIDDLEWARE server.use(express.json());
 */
const PATH = "/posts";
let id = 1;
// params:
/*
  /posts/:id/:author/:title => /posts/23/cesar/dark%20knight
  
  query:
  /posts => /posts//?id=23&author=cesar&title=dark%20knight
  let {id,author,title} = req.query
  tengo o no, todos los datos esperados?
  /search/?q=city
        let {q} = req.query;
        if(q) res.send('La informacion de la ciudad q')
        else res.send('La informacion de toda la API')
 */

// TODO: your code to handle requests

server.post(PATH, (req, res) => {
  const { author, title, contents } = req.body;
  //let author = req.body.author
  //let title = req.body.title
  //let contents= req.body.contents

  if (!author || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }

  const post = {
    author,
    title,
    contents,
    id: id++,
  };

  posts.push(post);
  res.status(200).json(post);
});

server.post(`${PATH}/author/:author`, (req, res) => {
  //req.params -> OBJETO
  // let author = req.params.author
  let { author } = req.params;
  let { title, contents } = req.body;

  if (!author || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }
  const post = {
    author,
    title,
    contents,
    id: id++,
  };

  posts.push(post);
  res.status(200).json(post);
});

server.get(PATH, (req, res) => {
  let { term } = req.query;
  //si term no vino por query quedara como undifine
  // si term vino por query, term = valor que se haya pasado
  if (term) {
    const term_posts = posts.filter(
      (p) => p.title.includes(term) || p.contents.includes(term)
    );
    console.log(term_posts);
    return res.json(term_posts);
  }

  res.json(posts); // por dafault esto manda un status 200
});

server.get(`${PATH}/:author`, (req, res) => {
  let { author } = req.params;

  const posts_author = posts.filter((p) => p.author === author);
  if (posts_author.length > 0) {
    res.json(posts_author);
  } else {
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: "No existe ningun post del autor indicado" });
  }
});

//query -> /posts?key=value1&key=value2&key=value3....
server.get(`${PATH}/:author/:title`, (req, res) => {
  let { author, title } = req.params;
  const new_posts = posts.filter(
    (p) => p.author === author && p.title === title
  );
  if (new_posts.length > 0) {
    res.json(new_posts);
  } else {
    return res.status(STATUS_USER_ERROR).json({
      error: "No existe ningun post con dicho titulo y autor indicado",
    });
  }
});

server.put(PATH, (req, res) => {
  let { id, title, contents } = req.body;
  if (id && title && contents) {
    // find -> devuelve le primer elemento que coincida
    // como el id es unico, deberia de encontrar un unico elemento
    // con el id pasado por body
    // por lo tanto puedo usar find que me va a devolver lo que

    let post = posts.find((p) => p.id === Number(id));

    if (post) {
      post.title = title;
      post.contents = contents;
      res.json(post);
    } else {
      return res.status(STATUS_USER_ERROR).json({
        error: "No existe ningun post con dicho ID",
      });
    }
  } else {
    return res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibieron los parámetros necesarios para modificar el Post",
    });
  }
});

server.delete(PATH, (req, res) => {
  let { id } = req.body;

  const post = posts.find((p) => p.id === Number(id));

  if (!id || !post) {
    return res.status(STATUS_USER_ERROR).json({ error: "Mensaje de error" });
  }
  posts = posts.filter((p)=> p.id !== Number(id));
  return res.json({ success: true });
});

server.delete("/author",(req,res) =>{
    let {author} = req.body;
    const author_found = posts.find((p)=> p.author === author);
    if(!author || !author_found){
        return res.status(STATUS_USER_ERROR).json( {error: "No existe el autor indicado"});
    } 
    let delete_authors = [];

    delete_authors= posts.filter((p)=> p.author === author);
    posts = posts.filter((p)=> p.author !== author);

    return res.json(delete_authors);
})

module.exports = { posts, server };
