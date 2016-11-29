/**
 * Created by Palash on 11/24/2016.
 */

let pStackTrace = new Pointcut("demoStackTrace", window);
pStackTrace.before(function(){
    console.log("[alter.js] " + pStackTrace.name + " was called from " + pStackTrace.joinpoint().caller.name);
    console.log("[alter.js] " + pStackTrace.joinpoint().caller.name + " was called from " + pStackTrace.joinpoint().caller.caller.name);
    console.log("[alter.js] " + "Arguments passed to " + pStackTrace.joinpoint().caller.name + " function were " + Array.from(pStackTrace.joinpoint().caller.arguments));
    console.log("[alter.js] " + "Arguments passed to " + pStackTrace.joinpoint().caller.caller.name + " function were " + Array.from(pStackTrace.joinpoint().caller.caller.arguments));
});
