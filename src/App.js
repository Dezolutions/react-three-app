import React from 'react'
import {useSelector} from 'react-redux'
import styles from './app.module.css'
import InputItem from './components/Input/InputItem'
import ButtonItem from './components/Button/ButtonItem'
import SelectItem from './components/Select/SelectItem'
import List from './components/List/List'
import SpawnPlatform from './components/SpawnPlatform/SpawnPlatform'

const App = () => {
  
  return (
    <div>
      <div className={styles.block}>
        <SelectItem />
        <InputItem />
        <ButtonItem />
      </div>
      <div className={styles.main}>
        <List/>
        <SpawnPlatform />
        
      </div>
    </div>
  )
}

export default App

