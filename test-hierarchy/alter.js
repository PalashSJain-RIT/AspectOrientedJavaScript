/**
 * Created by Palash on 11/24/2016.
 */

let pStackTrace = new Pointcut("demoStackTrace", window);
pStackTrace.before(function(){
    console.log("[alter.js] " + pStackTrace.name + " > "
        + pStackTrace.joinpoint().caller.name+ " > "
        + pStackTrace.joinpoint().caller.caller.name);
});
