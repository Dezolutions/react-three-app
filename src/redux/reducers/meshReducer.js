const meshes = [
  {
    id: 1,
    form: 'cube',
    args: [2, 2, 2],
    position: [0, 1, 0],
    color: 'lightgreen'
  },
  {
    id: 2,
    form: 'sphere',
    args: [1, 30, 30],
    position: [-2, 1, -5],
    color: 'orange',
  },
  {
    id: 3,
    form: 'pyramid',
    args: [2, 2, 4],
    position: [5, 1, 2],
    color: 'pink',
  }
];

const MeshReducer = (state = meshes, action) => {
  switch (action.type) {
    case 'ADD_MESH':
      return [
        ...state,
        {
          id: action.obj.id,
          form: action.obj.form,
          position: action.obj.position,
          color: action.obj.color,
          args: action.obj.args
        }
      ]
    case 'REMOVE_MESH':
      return state.filter(mesh => mesh.id !== action.id)

    default:
      return state;
  }
}

export default MeshReducer;