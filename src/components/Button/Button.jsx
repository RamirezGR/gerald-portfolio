import React from 'react'

const Button = ({title, className, onClick, to}) => {
    
  return (
    <>
        <button className={className} onClick={onClick} to={to}>{title}</button>
    </>
  )
}

Button.defaultProps = {
 title: 'Button',
}

export default Button