/**
 * Created by Palash on 11/24/2016.
 */
let pSuppressAlert = new Pointcut("alert", window);
pSuppressAlert.around(function(){
    console.log("Replaced alert with console.log");
    console.log("The message was: " + pSuppressAlert.arguments()[0]);
});