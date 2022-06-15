var fs  = require("fs");
var http  = require("http");


// const data = fs.readdirSync("./images");
// console.log(data);

// Escribí acá tu servidor

http.createServer((req,res)=>{
    const [_, file] = req.url.split('/');
    const exist = files.find((f)=> f === file) ? true : false;

    if(exist){
        const filedata = fs.readFileSync(`./images/${file}`);
        res.writeHead(200, {'Content-Type': 'Image/jpeg'});
        res.end(filedata);
    } else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>No se encontro la imagen</h1>')
    }
})