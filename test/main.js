/**
 * Created by Palash on 11/24/2016.
 */

function doBefore(num) {
    console.log("doBefore method called from the main script.");
}

function doAround(){
    console.log("doAround method called from the main script.");
}

function doAfter(){
    console.log("doAfter method called from the main script.");
}

let Calculator = {};
Calculator.prototype = {
    multiply: function (x, y) {
        console.log("[main.js]: " + "Multiplying method called from the main script.");
        return x * y;
    },

    subtract: function (x, y) {
        console.log("[main.js]: " + "Subtraction method called from the main script.");
        return x - y;
    },

    divide: function (x, y) {
        console.log("[main.js]: " + "Division method called from the main script.");
        return x / y;
    },

    testA: function(){
        console.log("[main.js] " + "A");
        return "a";
    },

    testB: function(){
        console.log("[main.js] " + "B");
        return "b";
    },

    sendAlertMessage: function(){
        alert("[main.js] " + "Alert message.");
    },

};

function demoStackTrace(x, y){
    console.log("[main.js]: " + "x: " + x + " | y: " + y + " from demoStackTrace");
}

class TestClass{
    constructor() {
        this.a = "a";
    }

    display(){
        console.log(this.a);
    }
}