/**
 * Created by Palash on 11/24/2016.
 */

var Pointcut = function (name, context) {
    this.name = name;
    this.context = context;
    this.orig = context[name];
};

Pointcut.prototype.joinpoint = function () {
    return this.context[this.name];
};

Pointcut.prototype.arguments = function () {
    return Array.from(this.joinpoint().arguments);
};

Pointcut.prototype.before = function (advice) {
    this.insideAround = false;
    let p = this.context[this.name];
    this.context[this.name] = function () {
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
    let p = this.context[this.name];
    this.context[this.name] = function () {
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
    this.context[this.name] = advice;
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
 function before(joinpoint, advice){
 return function () {
 try {
 advice();
 } catch (e) {
 console.log("Exception thrown from before advice: " + e.message);
 }
 return joinpoint.apply(this, arguments);
 }
 }

 function after(joinpoint, advice){
 return function () {
 let temp = joinpoint.apply(this, arguments);
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
    constructor(name, context) {
        this.name = name;
        this.context = context;
        this.orig = context[name];
    }

    joinpoint(){
        return this.context[this.name];
    }

    arguments(){
        return Array.from(this.joinpoint().arguments);
    }

    before(advice){
        this.insideAround = false;
        this.context[this.name] = before(this.context[this.name], advice);
    }

    after(advice){
        this.insideAround = false;
        this.context[this.name] = after(this.context[this.name], advice);
    }

    around(advice){
        this.insideAround = true;
        this.context[this.name] = advice;
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
