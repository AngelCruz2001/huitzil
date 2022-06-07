import React, { useState } from 'react'

export const InputSelectable = ({ style }) => {

  const [value, setValue] = useState('Hello World')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <input value={value} onChange={handleChange} placeholder={style.placeholder} type={style.type} name={style.name} style={{
      width: '100%',
      height: "100%",
      ...style,
    }} />
  )
}
