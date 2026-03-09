import React from 'react'
import styles from './Button.module.css'

function Button({name, section, setActiveSection}) {
  return (
    <>
        <button className={styles.menuBtn} name={name} onClick={() => setActiveSection(section)}>
          {name}
        </button>
    </>
  )
}

export default Button