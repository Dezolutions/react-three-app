export const addMesh = obj => ({
  type: 'ADD_MESH',
  obj
})

export const removeMesh = id => ({
  type: 'REMOVE_MESH',
  id
})