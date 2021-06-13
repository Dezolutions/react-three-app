import { Scene } from 'three'
import { light } from './light'

const scene = new Scene();
scene.add(light);

export default scene;