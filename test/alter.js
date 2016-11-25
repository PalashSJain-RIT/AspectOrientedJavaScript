/**
 * Created by Palash on 11/24/2016.
 */

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

Calculator.prototype.divide = BasicAspect.before(Calculator.prototype.divide, function () {
    var digits = Array.from(Calculator.prototype.divide.arguments);
    if (digits && digits.length == 2){
        console.log("Divide " + digits[0] + " from " + digits[1]);
        if (digits[1] == 0)
            throw new BasicAspectException("fatal", "Cannot divide by 0.");
    }
});

Calculator.prototype.multiply = BasicAspect.around(Calculator.prototype.multiply, function () {
    var digits = Array.from(Calculator.prototype.multiply.arguments);
    if (digits && digits.length == 2) {
        console.log("Multiply " + digits[0] + " with " + digits[1]);
    }
}, function (product) {
    console.log("The product is " + product);
});

Calculator.prototype.subtract = BasicAspect.after(Calculator.prototype.subtract, function (temp) {
    var digits = Array.from(Calculator.prototype.subtract.arguments);
    if (digits && digits.length == 2){
        console.log("Subtracting " + digits[0] + " from " + digits[1] + " gives " + temp);
    }
});