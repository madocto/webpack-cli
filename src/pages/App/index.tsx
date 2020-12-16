import * as React from 'react'
import Logo from '@/assets/logo.svg'
import styles from './index.less'

const App = () => {
  return (
    <div className={styles.wrap}>
      <img src={Logo} alt="" />
    </div>
  )
}

export default App
