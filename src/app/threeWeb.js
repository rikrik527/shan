var obj = require('./getall');
var labJson = require('../json/lab2.json');
var awake = require('./spa');
var source = require(['../libs/three'], ['../libs/ColladaLoader'], ['../libs/OBJLoader']);
module.exports.lab = function() {
    awake.script.addScript(source[0]);
    awake.script.addScript(source[1]);
    awake.script.addScript(source[1]);
    var scene = new THREE.Scene();
    var scene2 = new THREE.Scene();
    var scene3 = new THREE.Scene();

    var shanBtn = obj.get('.shan-btn');
    var width = window.innerWidth;
    var height = window.innerHeight;
    var viewAngle = 45;
    var near = 0.1;
    var far = 10000;
    var aspect = width / height;
    var camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);

    scene.add(camera);
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xaaaaff, 1.0));

    renderer.setSize(shanBtn.clientWidth, shanBtn.cliengHeight, false);
    renderer.shadowMapEnabled = true;
    camera.position.z = 150;
    camera.position.x = 130;
    camera.position.y = 140;
    camera.lookAt(scene.position);
    scene.add(camera);
    var spotLight = new THREE.DirectionalLight(0xffffff);
    spotLight.position.set(30, 40, 50);
    spotLight.intensity = 1;
    scene.add(spotlight);
    window.onresize = function() {
        renderer.setSize(shanBtn.clientWidth, shanBtn.cliengHeight)
    }
    shanBtn.insertAdjacentElement('afterbegin', renderer.domElement);
    var step = 0;
    var controls = new function() {

    }
    var mesh;
    var loader = new THREE.JSONLoader();
    loader.load(labJson, function(geometry, met) {
        mesh = new THREE.Mesh(geometry, mat[0]);
        mesh.scale.x = 15;
        mesh.scale.y = 15;
        mesh.scale.z = 15;

        scene.add(mesh);
    }, '../json/')
    renderer.render(scene, camera);
}