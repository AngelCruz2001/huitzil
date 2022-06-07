import React from 'react'

export const TextSelectable = ({ style }) => {
  return (
    <p onClick={() => onClickAction(style.action)} style={style}>{style.text}</p>
  )
}
