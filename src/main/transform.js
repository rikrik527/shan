var transform = window.transform ||
    window.mozTransform || window.webkitTransform || window.msTransform;
var transition = window.transition||
window.mozTransition || window.webkitTransition||
window.msTransition;
module.exports = {
    transform:transform,
    transition:transition
}