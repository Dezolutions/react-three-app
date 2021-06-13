import React from 'react'
import MeshItem from '../MeshItem/MeshItem'

const MeshArray = ({meshes}) => {
  return (
    <>
      {meshes && meshes.map(mesh => (
        <MeshItem  {...mesh} key={mesh.id} />
      ))}
    </>
  )
}

export default MeshArray
