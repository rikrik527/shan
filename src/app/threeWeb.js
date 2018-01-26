var THREE = require('three');
var threeLoader = require('three-json-loader');
var obj = require('./getall');
var labJson = require('https://github.com/rikrik527/shan/blob/master/src/json/lab.json');
module.exports.lab = function() {
    var scene = new THREE.Scene();


    var awake = obj.get('.awake-first-section');
    var width = window.innerWidth;
    var height = window.innerHeight;
    var viewAngle = 45;
    var near = 0.1;
    var far = 10000;
    var aspect = width / height;
    var camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
    camera.position.z = 2000;
    scene.add(camera);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(awake.clientWidth, awake.cliengHeight, false);
    window.onresize = function() {
        renderer.setSize(awake.clientWidth, awake.cliengHeight)
    }
    awake.insertAdjacentElement('afterbegin', renderer.domElement);
    var loader = new THREE.JSONLoader();
    loader.load(labJson, function(geometry, met) {
        mesh = new THREE.Mesh(geometry, mat[0]);
        mesh.scale.x = 15;
        mesh.scale.y = 15;
        mesh.scale.z = 15;

        scene.add(mesh);
    }, '../json/')
}