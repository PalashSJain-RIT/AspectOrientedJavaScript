/**
 * Created by Palash on 11/24/2016.
 */

let pBefore = new Pointcut("doBefore", window);
pBefore.before(function(){
    if (pBefore.arguments().length == 0) {
        console.log("No arguments were passed to doBefore.");
    } else {
        console.log("Arguments passed to doBefore was " + pBefore.arguments());
    }
});

let pAround = new Pointcut("doAround", window);
pAround.around(function(){
    console.log("doAround method started.");
    return pAround.proceed();
});

let pAfter = new Pointcut("doAfter", window);
pAfter.after(function(){
    if (pAfter.arguments().length == 0) {
        console.log("No arguments were passed to doAfter.");
    } else {
        console.log("Arguments passed to doBefore was " + pAfter.arguments());
    }
});

let pStackTrace = new Pointcut("demoStackTrace", window);
pStackTrace.before(function(){
    console.log("demoStackTrace was called from " + pStackTrace.pointcut().caller.name);
    console.log(pStackTrace.pointcut().caller.name + " was called from " + pStackTrace.pointcut().caller.caller.name);
    console.log("Arguments passed to " + pStackTrace.pointcut().caller.name + " function were " + Array.from(pStackTrace.pointcut().caller.arguments));
    console.log("Arguments passed to " + pStackTrace.pointcut().caller.caller.name + " function were " + Array.from(pStackTrace.pointcut().caller.caller.arguments));
});
// demoStackTrace = Pointcut.before(demoStackTrace, function () {

// });

let pMultiply = new Pointcut("multiply", Calculator.prototype);
pMultiply.around(function(){
    console.log("AROUND STARTED.");
    let temp = pMultiply.proceed();
    console.log("the output was " + temp);
    console.log("AROUND ENDED.");
    return temp;
});

let pDivide = new Pointcut("divide", Calculator.prototype);
pDivide.before(function () {
    console.log("BEFORE STARTED.");
    let digits = pDivide.arguments();
    if (digits && digits.length == 2){
        console.log("Divide " + digits[0] + " from " + digits[1]);
        if (digits[1] == 0)
            throw {
                message : "Cannot divide by 0."
            };
    }
    console.log("BEFORE ENDED.");
});

let pSubtract = new Pointcut("subtract", Calculator.prototype);
pSubtract.after(function(output){
    console.log("AFTER STARTED.")
    let digits = pSubtract.arguments();
    if (digits && digits.length == 2){
        console.log(pSubtract.proceed());
        console.log("Subtracting " + digits[0] + " from " + digits[1] + " gives " + output);
    }
    console.log("AFTER ENDED.")
});