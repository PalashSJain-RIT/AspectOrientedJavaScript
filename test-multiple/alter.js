/**
 * Created by Palash on 11/24/2016.
 */

let pointcuts = [];
for (let key in Thing.prototype){
    if (key.match(new RegExp("^test"))) {
        pointcuts[key] = new Pointcut(key, Thing.prototype);
        pointcuts[key].around(function(){
            console.log("Inside around advice");
            let output = pointcuts[key].proceed();
            console.log(output);
        });
    }
}