import { Mesh } from 'three'

import scene from './scene'
import { camera } from './camera'
import { renderer, controls } from './renderer'

const animation = () => {
  controls.update();
  requestAnimationFrame(animation)
  renderer.render(scene, camera);
}

export default animation;