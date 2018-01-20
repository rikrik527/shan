// Object function for none supported browser

Object.create = Object.create || function(obj) {
    var f = function() {};
    f.prototype = obj;
    return new f();
}