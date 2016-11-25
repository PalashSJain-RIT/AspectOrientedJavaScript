/**
 * Created by Palash on 11/24/2016.
 */

function doBefore(num) {
    console.log("doing stuff before " + num);
}

function doAround(){
    console.log("doing stuff around");
    return 3;
}

function doAfter(){
    console.log("doing stuff after");
}

var Calculator = {};
Calculator.prototype = {
    multiply: function (x, y) {
        return x * y;
    },

    subtract: function (x, y) {
        return x - y;
    },

    divide: function (x, y) {
        return x / y;
    },
};

function demoStackTrace(x, y){
    console.log("x: " + x + " | y: " + y + " from demoStackTrace");
}