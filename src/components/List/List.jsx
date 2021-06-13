import React from 'react'
import {useSelector} from 'react-redux'
import styles from './list.module.css'
const List = () => {
  const meshes = useSelector(({meshReducer}) => meshReducer)
  
  return (
    <ul className={styles.list}>
      {meshes && meshes.map(mesh => (
        <li>{mesh.form} {mesh.color} {mesh.id}</li>
      ))}
    </ul>
  )
}

export default List
