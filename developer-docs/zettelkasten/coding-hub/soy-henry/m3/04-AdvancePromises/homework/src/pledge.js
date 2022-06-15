"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
class $Promise {
  constructor(executor) {
    this._state = "pending";
    this._value = undefined;
    this._handlerGroups = [];
    if (typeof executor !== "function") {
      throw new TypeError("executor debe de ser una function");
    }

    // executor((value)=>this._internalResolve(value), (value)=>this._internalReject(value))
    executor(this._internalResolve.bind(this), this._internalReject.bind(this));
  }
  _internalResolve(value) {
    if (this._state === "pending") {
      this._state = "fulfilled";
      this._value = value;
      this._callHandlers();
    }
  }
  _internalReject(value) {
    if (this._state === "pending") {
      this._state = "rejected";
      this._value = value;
      this._callHandlers();
    }
  }
  _callHandlers() {
    while (this._handlerGroups.length) {
      const cb = this._handlerGroups.shift();
      if (this._state === "fulfilled") {
        if (cb.successCb) {
          try {
            const result = cb.successCb(this._value);
            if (result instanceof $Promise) {
              return result.then(
                (value) => cb.downstreamPromise._internalResolve(value),
                (error) => cb.downstreamPromise._internalReject(error) // this._internalReject.bind(this)
              );
            } else {
              cb.downstreamPromise._internalResolve(result);
            }
          } catch (err) {
            cb.downstreamPromise._internalReject(err);
          }
        } else {
          return cb.downstreamPromise._internalResolve(this._value);
        }
      } else if (this._state === "rejected") {
        if (cb.errorCb) {
          try {
            const result = cb.errorCb(this._value);
            if (result instanceof $Promise) {
              return result.then(
                (value) => cb.downstreamPromise._internalResolve(value),
                (error) => cb.downstreamPromise._internalReject(error) // this._internalReject.bind(this)
              );
            } else {
              cb.downstreamPromise._internalResolve(result);
            }
          } catch (err) {
            cb.downstreamPromise._internalReject(err);
          }
        } else {
          return cb.downstreamPromise._internalReject(this._value);
        }
      }
    }
  }
  then(successCb, errorCb) {
    if (typeof successCb !== "function") successCb = false;
    if (typeof errorCb !== "function") errorCb = false;

    // Nueva promesa que debemos retornar
    const downstreamPromise = new $Promise(() => {});
    this._handlerGroups.push({
      successCb,
      errorCb,
      downstreamPromise,
    });
    if (this._state !== "pending") this._callHandlers();
    return downstreamPromise;
  }
  catch(errorCb) {
    return this.then(null, errorCb);
  }
  static resolve(value) {
    if (value instanceof $Promise) {
      return value;
    }
    const p = new $Promise(() => {});
    p._internalResolve(value);
    return p;
  }
  static all(promises) {
    if (!Array.isArray(promises)) throw new TypeError();
    let isPromises = false;
    for (let val of promises) {
      if (val instanceof $Promise) isPromises = true;
    }

    const p = new $Promise((resolve, reject) => {
      const totalPromises = promises.length;
      let resolvedPromises = 0;
      const results = new Array(totalPromises);
      promises.forEach((promise, index) => {
        if (promise instanceof $Promise){
          promise.then((value) => {
              resolvedPromises++;
              results[index] = value;
              if (totalPromises === resolvedPromises) resolve(results);
            },
            reject);
        }else{
          resolvedPromises++;
          results[index] = promise;
          if (totalPromises === resolvedPromises) resolve(results);
        }
      });
    });
    return p;
  }
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
