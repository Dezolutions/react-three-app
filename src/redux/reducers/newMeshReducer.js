const newMesh = {
  id: 1,
  form: '',
  args: [],
  position: [],
  color: '',
}

const NewMeshReducer = (state = newMesh,action) => {
  switch (action.type) {
    case 'CHOOSE_FORM':
      return {...state, form: action.form}  
    case 'CHOOSE_ARGS':
      return { ...state, args:[...state.args, action.args]}
    case 'CHOOSE_COLOR': 
      return {...state, color: action.color}
    default:
      return state;
  }
}

export default NewMeshReducer;