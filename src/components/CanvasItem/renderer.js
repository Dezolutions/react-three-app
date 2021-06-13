import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { camera } from './camera'
import { APP_ID } from './constants'
export const renderer = new THREE.WebGL1Renderer({ antialias: true })
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.8);

export const controls = new OrbitControls(camera, renderer.domElement)

export const setRendererSize = (width, height) => renderer.setSize(width, height);

export const mountRender = () => document.getElementById(APP_ID)?.append(renderer.domElement);
