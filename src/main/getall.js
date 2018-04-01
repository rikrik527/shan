var get = function(selector) {
    return document.querySelector(selector);
};
var getId = function(id) {
    return document.getElementById(id);
}
var getAll = function(selectors) {
    return document.querySelectorAll(selectors)
}
var create = function(element) {
    return document.createElement(element);
}
var getCom = function(el, persudo, style) {
    return window.getComputedStyle(el, persudo).getPropertyValue(style);
}
var remove = function(selec) {
    return document.querySelector(selec).parentNode.removeChild(document.querySelector(selec))
}

module.exports = {
    get: get,
    getId: getId,
    getAll: getAll,
    create: create,
    getCom: getCom
}