/**
 * Created by Palash on 11/24/2016.
 */

var Pointcut = function (exp, context) {
    this.exp = exp;
    this.context = context;
    this.orig = context[exp];
};

Pointcut.prototype.pointcut = function () {
    return this.context[this.exp];
};

Pointcut.prototype.arguments = function () {
    return Array.from(this.pointcut().arguments);
};

Pointcut.prototype.before = function (advice) {
    this.insideAround = false;
    let p = this.context[this.exp];
    this.context[this.exp] = function () {
        try {
            advice();
        } catch (e) {
            console.log("Exception thrown from " +
                "before advice: " + e.message);
        }
        return p.apply(this, arguments);
    };
};

Pointcut.prototype.after = function (advice) {
    this.insideAround = false;
    let p = this.context[this.exp];
    this.context[this.exp] = function () {
        let temp = p.apply(this, arguments);
        try {
            advice(temp);
        } catch (e) {
            console.log("Exception thrown from " +
                "after advice: " + e.message);
            throw e;
        }
        return temp;
    }
};

Pointcut.prototype.around = function (advice) {
    this.insideAround = true;
    this.context[this.exp] = advice;
};

Pointcut.prototype.proceed = function () {
    if (this.insideAround) {
        return this.orig.apply(this, this.arguments());
    }
    throw {
        message: "Proceed can only be called from around advice."
    }
};

/*
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
 */

/*
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
}*/
