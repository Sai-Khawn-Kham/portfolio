import React from 'react'

const Container = ({ children, className="", styles={}, id="" }) => {
  return (
    <section id={id} style={styles} className={`${className} px-20`}>{children}</section>
  )
}

export default Container