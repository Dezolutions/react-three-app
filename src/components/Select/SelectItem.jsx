import React from 'react'
import {FormControl, MenuItem, Select, InputLabel, TextField, Button} from '@material-ui/core'
import styles from './select.module.css'
import {useDispatch} from 'react-redux'
import {addMesh} from '../../redux/actions/meshAction'
const SelectForm = () => {
  const dispatch = useDispatch()
  const [form, setForm] = React.useState('')
  const [value, setValue] = React.useState('')
  const [color, setColor] = React.useState('#000000')
  
  const onChangeForm = e => setForm(e.target.value);
  const onChangeColor = e => setColor(e.target.value);
  const onChangeValue = e => {
    if(+e.target.value > 5 ) return false
    setValue(+e.target.value)
  };

  const onSubmit = () => {
    let args = [];
    if(form === 'cube'){
      args = [value,value,value]
    }
    else if(form === 'sphere'){
      args = [value,30,30]
    }
    else if(form === 'pyramid'){
      args = [value,value,4]
    }
    const obj = {
      id: Date.now(),
      form: form,
      args: args,
      position: [((Math.random() - 0.5) * 20), (Math.random() * 6), ((Math.random() - 0.5) * 20)],
      color: color
    }
    console.log(obj)
    form && value && dispatch(addMesh(obj))
  };

  
  return (
    <div className={styles.block}>
      <FormControl variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label">Object</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            className={styles.select}
            label="Object"
            onChange={onChangeForm}
            value={form}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'cube'}>Cube</MenuItem>
            <MenuItem value={'sphere'}>Sphere</MenuItem>
            <MenuItem value={'pyramid'}>Pyramid</MenuItem>
          </Select>
        </FormControl>
        <TextField id="outlined-basic" value={value} onChange={onChangeValue} label="Enter a size of object" variant="outlined" />
        <input  type="color" value={color} onChange={onChangeColor} className={styles.color}  />
        <Button variant="contained" color="primary" onClick={onSubmit} size="large">
          create
        </Button>
    </div>
  )
}

export default SelectForm
