import React from 'react'
import {setCameraAspect,camera} from './camera'
import { APP_ID } from './constants'
import {setRendererSize,mountRender} from './renderer'
const CanvasItem = () => {
  React.useEffect(() => {
    mountRender()
  },[])

  return (
    <div id ={APP_ID}>
      
    </div>
  )
}

export default CanvasItem
