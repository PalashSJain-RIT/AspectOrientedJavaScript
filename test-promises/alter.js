/**
 * Created by Palash on 11/25/2016.
 */

// This is called twice, due to how Promises work.
Promise.prototype.then = BasicAspect.before(Promise.prototype.then, function(){
    console.log("Before Promise.then");
})