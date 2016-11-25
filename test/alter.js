/**
 * Created by Palash on 11/24/2016.
 */

// Overriding function declarations
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

// Overriding Function expressions
Calculator.prototype.divide = BasicAspect.before(this, function () {
    var digits = Array.from(Calculator.prototype.divide.arguments);
    if (digits && digits.length == 2 && digits[1] == 0) {
        throw new BasicAspectException("fatal", "Cannot divide by 0.");
    }
});