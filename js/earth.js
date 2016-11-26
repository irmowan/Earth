/**
 * Created by irmo on 16/11/26.
 */

var WIDTH = window.innerWidth - 30,
    HEIGHT = window.innerHeight - 30;

var angle = 45,
    aspect = WIDTH / HEIGHT,
    near = 0.1,
    far = 10000,
    rotationSpeed = 0.2;
var clock = new THREE.Clock();

var container = document.getElementById('container');

var camera = new THREE.PerspectiveCamera(angle, aspect, near, far);
camera.position.set(1200, 0, 0);

var scene = new THREE.Scene();
camera.lookAt(scene.position);

var light = new THREE.SpotLight(0xFFFFFF, 1, 0, Math.PI / 2, 1);
light.position.set(4000, 4000, 2500);
light.target.position.set(1000, 1000, 5000);
light.castShadow = true;
scene.add(light);

var earthGeo = new THREE.SphereGeometry(200, 400, 400),
    earthMat = new THREE.MeshPhongMaterial();
earthMat.map = THREE.ImageUtils.loadTexture('img/earth2880.jpg');

var earthMesh = new THREE.Mesh(earthGeo, earthMat);
earthMesh.position.set(-100, 0, 0);
earthMesh.rotation.y = 5;
earthMesh.castShadow = true;
earthMesh.receiveShadow = true;
scene.add(earthMesh);

var starGeo = new THREE.SphereGeometry(3000, 10, 100),
    starMat = new THREE.MeshBasicMaterial();
starMat.map = THREE.ImageUtils.loadTexture('img/star-field.png');
starMat.side = THREE.BackSide;

var starMesh = new THREE.Mesh(starGeo, starMat);
scene.add(starMesh);

var renderer = new THREE.WebGLRenderer({antialiasing: true});
renderer.setSize(WIDTH, HEIGHT);

container.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
    var delta = clock.getDelta();
    earthMesh.rotation.y += rotationSpeed * delta;
    renderer.clear();
    renderer.render(scene, camera);
}

animate();
