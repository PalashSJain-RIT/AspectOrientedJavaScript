/**
 * Created by Palash on 11/24/2016.
 */

function before(pointcut, advice){
    return function () {
        try {
            advice();
        } catch (e) {
            console.log("Exception thrown from before advice: " + e.message);
        }
        return pointcut.apply(this, arguments);
    }
}

function after(pointcut, advice){
    return function () {
        let temp = pointcut.apply(this, arguments);
        try {
            advice(temp);
        } catch (e) {
            console.log("Exception thrown from after advice: " + e.message);
            throw e;
        }
        return temp;
    }
}

class Pointcut {
    constructor(exp, context) {
        this.exp = exp;
        this.context = context;
        this.orig = context[exp];
    }

    pointcut(){
        return this.context[this.exp];
    }

    arguments(){
        return Array.from(this.pointcut().arguments);
    }

    before(advice){
        this.insideAround = false;
        this.context[this.exp] = before(this.context[this.exp], advice);
    }

    after(advice){
        this.insideAround = false;
        this.context[this.exp] = after(this.context[this.exp], advice);
    }

    around(advice){
        this.insideAround = true;
        this.context[this.exp] = advice;
    }

    proceed(){
        if (this.insideAround) {
            return this.orig.apply(this, this.arguments());
        }
        throw {
            message: "Proceed can only be called from around advice."
        }
    }

}