import React from 'react'
import styles from './app.module.css'
import InputItem from './components/Input/InputItem'
import ButtonItem from './components/Button/ButtonItem'
import SelectItem from './components/Select/SelectItem'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <SelectItem/>
        <InputItem/>
        <ButtonItem/>
      </div>

    </div>
  )
}

export default App

