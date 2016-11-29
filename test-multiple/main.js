/**
 * Created by Palash on 11/24/2016.
 */

let Thing = {};
Thing.prototype = {
    xtest: function (){
        console.log("This wouldn't be overwritten.")
    },

    testA: function(){
        console.log("A");
        return "a";
    },

    testB: function(){
        console.log("B");
        return "b";
    },

};