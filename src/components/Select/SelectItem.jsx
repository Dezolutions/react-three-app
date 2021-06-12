import React from 'react'
import {FormControl, MenuItem, Select, InputLabel} from '@material-ui/core'
import styles from './select.module.css'
const SelectItem = () => {
  return (
    <>
      <FormControl variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label">Object</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            className={styles.select}
            label="Object"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Cube'}>Cube</MenuItem>
            <MenuItem value={'Sphere'}>Sphere</MenuItem>
            <MenuItem value={'Pyramid'}>Pyramid</MenuItem>
          </Select>
        </FormControl>
    </>
  )
}

export default SelectItem
