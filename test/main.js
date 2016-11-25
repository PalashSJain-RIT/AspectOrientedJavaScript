/**
 * Created by Palash on 11/24/2016.
 */

function doBefore(num) {
    console.log("doing stuff before " + num);
}

function doAround(){
    console.log("doing stuff around");
}

function doAfter(){
    console.log("doing stuff after");
}

var Thing = {};
Thing.prototype = {
    doBeforeThing: function () {
        console.log("doBeforeThing");
    },

    doAfterThing: function () {
        console.log("doAfterThing");
    },

    doAroundThing: function () {
        console.log("doAroundThing");
    }
};