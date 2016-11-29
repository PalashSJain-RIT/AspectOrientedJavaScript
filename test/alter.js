/**
 * Created by Palash on 11/24/2016.
 */

let pBefore = new Pointcut("doBefore", window);
pBefore.before(function(){
    console.log("Arguments passed to doBefore" +
        " were " + pBefore.arguments());
});

let pAround = new Pointcut("doAround", window);
pAround.around(function(){
    console.log("doAround method started.");
    let output = pAround.proceed();
    console.log("The output of was: " + output);
});

let pAfter = new Pointcut("doAfter", window);
pAfter.after(function(output){
   console.log("The output is " + output);
});

let pStackTrace = new Pointcut("demoStackTrace", window);
pStackTrace.before(function(){
    console.log("[alter.js] " + "demoStackTrace was called from " + pStackTrace.pointcut().caller.name);
    console.log("[alter.js] " + pStackTrace.pointcut().caller.name + " was called from " + pStackTrace.pointcut().caller.caller.name);
    console.log("[alter.js] " + "Arguments passed to " + pStackTrace.pointcut().caller.name + " function were " + Array.from(pStackTrace.pointcut().caller.arguments));
    console.log("[alter.js] " + "Arguments passed to " + pStackTrace.pointcut().caller.caller.name + " function were " + Array.from(pStackTrace.pointcut().caller.caller.arguments));
});

let pMultiply = new Pointcut("multiply", Thing.prototype);
pMultiply.around(function(){
    console.log("[alter.js] " + "AROUND STARTED WITH ARGUMENTS " + pMultiply.arguments());
    let temp = pMultiply.proceed();
    console.log("[alter.js] " + "the output was " + temp);
    console.log("[alter.js] " + "AROUND ENDED.");
    return temp;
});

let pDivide = new Pointcut("divide", Thing.prototype);
pDivide.before(function () {
    console.log("[alter.js] " + "BEFORE STARTED.");
    let digits = pDivide.arguments();
    if (digits && digits.length == 2){
        console.log("[alter.js] " + "Divide " + digits[0] + " from " + digits[1]);
        if (digits[1] == 0)
            throw {
                message : "Cannot divide by 0."
            };
    }
    console.log("[alter.js] " + "BEFORE ENDED.");
});

let pSubtract = new Pointcut("subtract", Thing.prototype);
pSubtract.after(function(output){
    console.log("[alter.js] " + "AFTER STARTED.");
    let digits = pSubtract.arguments();
    if (digits && digits.length == 2){
        console.log("[alter.js] " + "Subtracting " + digits[0] + " from " + digits[1] + " gives " + output);
    }
    console.log("[alter.js] " + "AFTER ENDED.")
});

let pTestClassDisplay = new Pointcut("display", TestClass.prototype);
pTestClassDisplay.before(function () {
   console.log("[alter.js] " + "before pTestClassDisplay");
});

let pointcuts = [];
for (let key in Thing.prototype){
    if (key.match(new RegExp("test"))) {
        pointcuts[key] = new Pointcut(key, Thing.prototype);
        pointcuts[key].around(function(){
            let output = pointcuts[key].proceed();
            console.log(output);
        });
    }
}

let pSuppressAlert = new Pointcut("alert", window);
pSuppressAlert.around(function(){
    console.log("Replaced Alert with console.log");
    console.log("The message was");
    console.log(pSuppressAlert.arguments()[0]);
});