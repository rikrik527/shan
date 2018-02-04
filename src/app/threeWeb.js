var obj = require('./getall');
var THREE = require('threejs-utils');
var labJson = require('../json/lab2.json');
var awake = require('./spa');

module.exports.lab = function() {

    var scene = new THREE.Scene();
    var scene2 = new THREE.Scene();
    var scene3 = new THREE.Scene();

    var shanBtn = obj.get('.shan-btn');
    var width = shanBtn.clientWidth;
    var height = shanBtn.clientHeight;
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
    var model;
    var loader = new THREE.ColladaLoader();
    loader.load('../json/lab.dae', function(collada) {
        model = collada.scene;
        model.scale.set(0.1, 0.1, 0.1);
        model.position.y = -300;
        model.rotation.x = -Math.PI / 2
        model.updateMatrix();

        scene.add(model);
    });
    renderer.render(scene, camera);
}