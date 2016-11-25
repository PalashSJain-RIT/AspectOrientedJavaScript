/**
 * Created by Palash on 11/25/2016.
 *
 * Example modified from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */
var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;
    console.log(thisPromiseCount + ") Started (Sync code started)");

    var promise = new Promise(
        function (resolve, reject) {
            console.log(thisPromiseCount + ") Promise started (Async code started)");
            window.setTimeout(
                function () {
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    promise.then(
        function (val) {
            console.log(thisPromiseCount + ") Promise fulfilled (Async code terminated)");
        })
        .catch(
            function (reason) {
                console.log(thisPromiseCount + ") Handle rejected promise ('+reason+') here.");
            });

    console.log(thisPromiseCount + ") Promise made (Sync code terminated)");
}