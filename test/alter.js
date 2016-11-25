/**
 * Created by Palash on 11/24/2016.
 */

// Overriding normal functions
doBefore = BasicAspect.before(doBefore, function () {
    console.log("Argument object passed to doBefore was " + doBefore.arguments);
});

doAround = BasicAspect.around(doAround, function () {
    console.log("adding before part in around advice");
}, function () {
    console.log("adding after part in around advice");
});

doAfter = BasicAspect.after(doAfter, function () {
    console.log("Argument object passed to doAfter was " + doAfter.arguments);
});


// Overriding Function objects
Thing.prototype.doBeforeThing = BasicAspect.before(Thing.prototype.doBeforeThing, function () {
    console.log("Before doBeforeThing.");
});

Thing.prototype.doAfterThing = BasicAspect.after(Thing.prototype.doAfterThing, function () {
    console.log("After doAfterThing.");
});

Thing.prototype.doAroundThing = BasicAspect.around(Thing.prototype.doAroundThing, function () {
    console.log("Before doAroundThing.");
}, function () {
    console.log("After doAroundThing.");
});