/**
 * Created by Palash on 11/24/2016.
 */

var BasicAspect = {
    before: function (pointcut, before) {
        return function () {
            try{
                before();
            } catch (e) {
                console.log("Exception thrown from before advice: " + e)
            }
            return pointcut.apply(this, arguments);
        }
    },

    around: function (pointcut, before, after) {
        return function () {
            try{
                before();
            } catch (e) {
                console.log("Exception thrown from before advice: " + e)
            }
            var temp = pointcut.apply(this, arguments);
            try{
                after();
            } catch (e) {
                console.log("Exception thrown from after advice: " + e)
            }
            return temp;
        }
    },

    after: function (pointcut, after) {
        return function () {
            var temp = pointcut.apply(this, arguments);
            try{
                after();
            } catch (e) {
                console.log("Exception thrown from after advice: " + e)
            }
            return temp;
        }
    },

    afterThrowing: function (pointcut, after){
        return function () {
            try {
                return pointcut.apply(this, arguments)
            } catch (e) {
                try{
                    after();
                } catch (e) {
                    console.log("Exception thrown from after advice: " + e)
                }
                throw e;
            }
        }
    }
};
