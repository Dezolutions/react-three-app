
import React from 'react'
import {useSelector} from 'react-redux'
import  ListItem  from '../ListItem/ListItem'
import styles from './list.module.css'
const List = () => {
  const meshes = useSelector(state => state)
  
  return (
    <ul className={styles.list}>
      {meshes && meshes.map(mesh => (
        <ListItem key={mesh.id} {...mesh}/>
      ))}
    </ul>
  )
}

export default List
