const fs = require('fs');
const request = require('request');




function pwd(done){
    done(process.cwd());
}

function date(done){
    done(Date());
}


function ls(done){
    fs.readdir('.', (err, files) =>{
        let output = "";

        if(err) throw err;
        files.forEach((file, index)=>{
            output += (index === 0 ? "" : "\n") + file.toString();
        })
        done(output);
    })
}


function echo(done, ...input){
    done(input.join(" "));
}

function cat(done, ...inputs){
    fs.readFile(inputs[0], "utf-8", (err,data)=> {
        let output = "";
        if(err) throw err;
        done(data);
    });
}


function head(done, ...inputs){
    fs.readFile(inputs[0], "utf-8", (err,data)=> {
        if(err) throw err;
        const lines = data.split('\n');
        
        done(lines.slice(0, inputs[1] && Number(inputs[1]) || 3).join("\n"));
    });
}

function tail(done, ...inputs){
    fs.readFile(inputs[0], "utf-8", (err,data)=> {
        if(err) throw err;
        const lines = data.split('\n');
        
        done(lines.slice((inputs[1] && Number(inputs[1]) || 5) * -1).join("\n"));
    });
}
// function tail(done, path, n){
//     fs.readFile(path, "utf-8", (err,data)=> {
//         if(err) throw err;
//         const lines = data.split('\n');
        
//         done(lines.slice((n && Number(n) || 5) * -1).join("\n"));
//     });
// }

function curl(done, path){
    request(path,(err, response, body) => {
        done(body);
    })
}

module.exports = {
    pwd,
    date,
    ls,
    echo,
    cat,
    head,
    tail,
    curl

}