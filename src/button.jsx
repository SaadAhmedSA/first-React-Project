import React from 'react'

export const Button = ({name,func}) => {
  return (
    <button onClick={func}>{name}</button>
  )
}
