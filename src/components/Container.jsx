import React from 'react'

const Container = ({ children, className="", styles={}, id="" }) => {
  return (
    <section id={id} style={styles} className={`${className} px-3 md:px-10`}>{children}</section>
  )
}

export default Container