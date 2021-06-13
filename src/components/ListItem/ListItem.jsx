import React from 'react'

import styles from './listitem.module.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux'
import { removeMesh } from '../../redux/actions/meshAction'; 
const ListItem = ({id, form}) => {
  const dispatch = useDispatch()
  const onDelete = () => dispatch(removeMesh(id))
  return (
    <li className={styles.item}>
      <p>{id} {form}</p>
      <IconButton aria-label="delete" onClick={onDelete} >
        <DeleteIcon />
      </IconButton> 
    </li>
  )
}

export default ListItem
