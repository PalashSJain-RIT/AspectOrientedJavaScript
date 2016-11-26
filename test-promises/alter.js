/**
 * Created by Palash on 11/25/2016.
 */

// This is called twice, due to how Promises work.
let pPromiseThen = new Pointcut("then", Promise.prototype);
pPromiseThen.before(function(){
    console.log("Before Promise.then");
});