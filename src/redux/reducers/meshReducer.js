const meshes = [
  {
    id: 1,
    form: 'cube',
    args: [2, 2, 2],
    position: [0, 1, 0],
    color: 'lightblue',
  },
  {
    id: 2,
    form: 'sphere',
    args: [1, 20, 20],
    position: [-2, 1, -5],
    color: 'lightorange',
  },
  {
    id: 3,
    form: 'pyramid',
    args: [2, 3, 4],
    position: [5, 1.5, 2],
    color: 'pink',
  }
];

const MeshReducer = (state = meshes, action) => {
  switch (action.type) {
    case 'ADD_MESH':
      return [
        ...state,
        {
          id: action.id,
          form: action.form,
          position: [...action.position],
          color: action.color,
          args: [...action.args]
        }
      ]
    case 'REMOVE_MESH':
      return state.filter(mesh => mesh.id !== action.id)

    default:
      return state;
  }
}

export default MeshReducer;