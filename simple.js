

(function myFunction() {
    var a = "some words"
    console.log(a);

    myClosure = function() {
        console.log(a);
        a = "crazy words";
    }

    a = "other words";

    myClosure();
})();

myClosure();

var myClosure;