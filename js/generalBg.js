let camera, scene, renderer;
let geometry, material, mesh;
let speed = 0.001;
let meshes;
let cameraZ = 2;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = cameraZ;

  scene = new THREE.Scene();

  function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  meshes = Array(1)
    .fill()
    .map(() => {

      let geometry = new THREE.SphereGeometry(1, 20, 20);
      let material = new THREE.MeshBasicMaterial( {wireframe: true, color: 0xffffff} );
      
      
      let mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = 0;
      // mesh.position.y = 0;
      mesh.rotation.y =0;

      return mesh;
    });

  meshes.forEach(mesh => scene.add(mesh));

  function buildLights(scene) {
      var light = new THREE.SpotLight("#000", 1.8);
      light.position.z = 1;
  
      light.angle = .05;
  
      light.decacy = .2;
      light.penumbra = 1;
  
      light.shadow.camera.near = 10;
      light.shadow.camera.far = 1000;
      light.shadow.camera.fov = 30;
  
      scene.add(light);
  }
  var light = buildLights(scene);

  scene.background = new THREE.Color(0x2f58aa);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;
  document.body.appendChild(renderer.domElement).setAttribute("class", "esfera");
  

}

function animate() {
  requestAnimationFrame(animate);

  // mesh.rotation.x += speed;
  meshes[0].rotation.y += speed;
  // mesh.rotation.z += speed;

  // cameraZ -= 0.01;
  // camera.position.z = cameraZ;

  renderer.render(scene, camera);
}
