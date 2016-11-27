/**
 * Created by Palash on 11/24/2016.
 */

let pBefore = new Pointcut("doBefore", window);
pBefore.before(function(){
    if (pBefore.arguments().length == 0) {
        console.log("[alter.js] " + "No arguments were passed to doBefore.");
    } else {
        console.log("[alter.js] " + "Arguments passed to doBefore was " + pBefore.arguments());
    }
});

let pAround = new Pointcut("doAround", window);
pAround.around(function(){
    console.log("[alter.js] " + "doAround method started.");
    return pAround.proceed();
});

let pAfter = new Pointcut("doAfter", window);
pAfter.after(function(){
    if (pAfter.arguments().length == 0) {
        console.log("[alter.js] " + "No arguments were passed to doAfter.");
    } else {
        console.log("[alter.js] " + "Arguments passed to doBefore was " + pAfter.arguments());
    }
});

let pStackTrace = new Pointcut("demoStackTrace", window);
pStackTrace.before(function(){
    console.log("[alter.js] " + "demoStackTrace was called from " + pStackTrace.pointcut().caller.name);
    console.log("[alter.js] " + pStackTrace.pointcut().caller.name + " was called from " + pStackTrace.pointcut().caller.caller.name);
    console.log("[alter.js] " + "Arguments passed to " + pStackTrace.pointcut().caller.name + " function were " + Array.from(pStackTrace.pointcut().caller.arguments));
    console.log("[alter.js] " + "Arguments passed to " + pStackTrace.pointcut().caller.caller.name + " function were " + Array.from(pStackTrace.pointcut().caller.caller.arguments));
});

let pMultiply = new Pointcut("multiply", Calculator.prototype);
pMultiply.around(function(){
    console.log("[alter.js] " + "AROUND STARTED.");
    let temp = pMultiply.proceed();
    console.log("[alter.js] " + "the output was " + temp);
    console.log("[alter.js] " + "AROUND ENDED.");
    return temp;
});

let pDivide = new Pointcut("divide", Calculator.prototype);
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

let pSubtract = new Pointcut("subtract", Calculator.prototype);
pSubtract.after(function(output){
    console.log("[alter.js] " + "AFTER STARTED.")
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

let pTestCalculator = new Pointcut("test", Calculator.prototype, "falssss");
pTestCalculator.before(function(){
    console.log("[alter.js] " + "Adding 'before' to all test methods in Calculator.prototype");
});
pTestCalculator.after(function(output){
    console.log("[alter.js] " + "Adding 'after' to all test methods in Calculator.prototype " + output);

});

let pSuppressAlert = new Pointcut("alert", window);
pSuppressAlert.around(function(){
    console.log("Replaced Alert with console.log");
    console.log("The message was");
    console.log(pSuppressAlert.arguments()[0]);
});