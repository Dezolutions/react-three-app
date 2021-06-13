import * as THREE from "three";

export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10

export const setCameraAspect = (width, height) => {
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};