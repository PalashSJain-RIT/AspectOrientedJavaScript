/**
 * Created by Palash on 11/25/2016.
 */
var fib = [];
let pFibonacci = new Pointcut("calculateFibWithAOP", window);
pFibonacci.around(function(){
    let pos = pFibonacci.arguments();
    if (fib && fib[pos]){
        return fib[pos];
    } else {
        fib[pos] = pFibonacci.proceed();
        return fib[pos];
    }
});