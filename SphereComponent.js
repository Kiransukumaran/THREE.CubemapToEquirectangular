function ShereComponent() {
  var sphereGeometry = new THREE.SphereGeometry(5, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
  var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xff00ff });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = -4;
  sphere.position.y = 3;
  sphere.position.z = 0;
  scene.add(sphere);
}
