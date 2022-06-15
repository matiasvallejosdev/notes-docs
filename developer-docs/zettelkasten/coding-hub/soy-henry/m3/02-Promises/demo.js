const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('hola');
    }, 1000);

    // throw new Error ("Pesimo servicio Pa!\n Aprende a codear");
});

promise.then(handleOk, handleError);

function handleOk(value){
    console.log(value);
}
function handleError(error){
    console.error(error);
}