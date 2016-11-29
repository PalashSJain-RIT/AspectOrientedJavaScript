/**
 * Created by Palash on 11/24/2016.
 */

let pStackTrace = new Pointcut("demoStackTrace", window);
pStackTrace.before(function(){
    console.log("[alter.js] " + pStackTrace.exp + " was called from " + pStackTrace.pointcut().caller.name);
    console.log("[alter.js] " + pStackTrace.pointcut().caller.name + " was called from " + pStackTrace.pointcut().caller.caller.name);
    console.log("[alter.js] " + "Arguments passed to " + pStackTrace.pointcut().caller.name + " function were " + Array.from(pStackTrace.pointcut().caller.arguments));
    console.log("[alter.js] " + "Arguments passed to " + pStackTrace.pointcut().caller.caller.name + " function were " + Array.from(pStackTrace.pointcut().caller.caller.arguments));
});
