/**
 * Created by Palash on 11/24/2016.
 */

var Aspect = {
    before: function (pointcut, before) {
        return function () {
            before();
            return pointcut.apply(this, arguments);
        }
    },

    around: function (pointcut, before, after) {
        return function () {
            before();
            var temp = pointcut.apply(this, arguments);
            after();
            return temp;
        }
    },

    after: function (pointcut, after) {
        return function () {
            var temp = pointcut.apply(this, arguments);
            after();
            return temp;
        }
    }
};