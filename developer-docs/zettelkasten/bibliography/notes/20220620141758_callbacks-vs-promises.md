# Callbacks vs Promises

**Tags:** #callbacks #promises #callbacks-vs-promises

**Links**
- [Callbacks vs Promises en JavaScript](https://youtu.be/frm0CHyeSbE)

## Content

Primero hay que entender que hay funciones que pueden recibir como parametro otra funcion. Eso es un callback. Significa pasarle una funcion a otra funcion ejecutando y retornando un valor.

```javascript
const operation = (a,b,callback) => {
    return callback(a, b); // You could use a promise to execute this operation asynchronously
}

operation(1,3, (a,b) => {
    return a + b;
})
```

Para realizar de forma async la operacion, se puede usar una funcion como setTimeout, fetch o promesas. Pero estas funciones no son callback, por lo que no se pueden usar como parametros de otra funcion.

```javascript
const doAsyncStuffWithPromises = (a,b) => {
    const res = a + b;
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(res);
        }, 1000);
    });
}

doAsyncStuffWithPromises(1,3)
    .then((result, done) => {
        console.log("Result is " + result);
    })
    .then((result, done) => console.log(`Operation finished (${done})`));
```