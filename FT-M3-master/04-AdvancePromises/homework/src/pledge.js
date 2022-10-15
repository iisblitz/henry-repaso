'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise (executor){
    if ( typeof executor ==! 'function') throw new TypeError("executor function");
    this._state ='pending';
    this._value = undefined;
    
    executor(this._internalReject().bind(this),this._internalResolve().bind(this));

    this._handlerGroups = [];


}

$Promise.prototype._internalResolve = (value) => {
    if(this.state === 'pending') {
    this._state = 'fulfilled';
    this._value=value;
    }
}
$Promise.prototype._internalReject = (value) => {
    if(this.state === 'pending'){
        this._state = 'rejected';
        this._value = value
    }
}

$Promise.prototype.then = (successCB, errorCB) => {
if(typeof successCB ==! 'function') successCB = false;
if(typeof errorCB ==! 'function') successCB = false;
    this._handlerGroups.push({successCB, errorCB})
    if(this._state ==!'pending') this._callHandlers
}

$Promise.prototype._callHandlers = () => {
    while(this._handlerGroups>0){
        let current = this._handlerGroups.shift();
        if(this._state=== 'fulfilled'){
            current.successCB && current.successCB(this._value)}
        if (this._state==='rejected') {
            current.errorCB && current.errorCB(this._value)
        }
    }
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

$Promise.prototype._internalResolve = () => {}
module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/


