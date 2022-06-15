var http = require("http");
var fs = require("fs");

var beatles = [
  {
    name: "John Lennon",
    birthdate: "09/10/1940",
    profilePic:
      "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
  },
  {
    name: "Paul McCartney",
    birthdate: "18/06/1942",
    profilePic:
      "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
  },
  {
    name: "George Harrison",
    birthdate: "25/02/1946",
    profilePic:
      "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
  },
  {
    name: "Richard Starkey",
    birthdate: "07/08/1940",
    profilePic:
      "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
  },
];

http
  .createServer(function (req, res) {
    if (req.url === "/api" || req.url === "/api/") {
      //Si la URL es /api devolvemos el objeto
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(beatles));
    }

    if (req.url.substring(0, 5) === "/api/") {
      const beatle =  searchBeatle(req);
      if (beatle) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(beatle));
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("<h1>No es un beatle</h1>");
      }
    }

    if(req.url === "/"){
      res.writeHead(404, { "Content-Type": "text/html" });
      const data = readFile("./index.html")
      return res.end(data);
    }

    if(req.url[0] === "/" && req.url.length > 1){
      const beatle =  searchBeatle(req);
      if(response){
        let data = readFile('./beatle.html');

        data = data.replaceAll('{name}', beatle.name);
        data = data.replace('{birthdate}', beatle.birthdate);
        data = data.replace('{profilePic}', beatle.profilePic);

        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(data);
      }
    }
  })
  .listen(1337);

  function searchBeatle(req){
    const name = req.url.split("/").pop();
    return beatles.find((beatle) => encodeURI(beatle.name) === name);
  }

  function readFile(path){
    return fs.readFileSync(path, "utf-8");
  }
