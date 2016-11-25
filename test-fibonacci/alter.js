/**
 * Created by Palash on 11/25/2016.
 */
var fib = [];
var orig = calculateFibWithAOP;

calculateFibWithAOP = function(){
    var pos = Array.from(arguments);
    if (fib && fib[pos]){
        return fib[pos];
    } else {
        fib[pos] = orig.apply(this, arguments);
    }
    return fib[pos];
}