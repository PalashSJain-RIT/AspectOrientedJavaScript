/**
 * Created by Palash on 11/24/2016.
 */
doBefore = Aspect.before(doBefore, function(){
    console.log("before advice added to doBefore");
});

doAround = Aspect.around(doAround, function(){
    console.log("adding before part in around advice");
}, function () {
    console.log("adding after part in around advice");
});

doAfter = Aspect.after(doAfter, function(){
    console.log("after advice adding to doAfter");
});