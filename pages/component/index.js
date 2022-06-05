import React from 'react'
import { Button } from '../../components/Button'
import { Slider } from '../../components/Slider'
const Component = () => {
  return (
    <div style={
      {
        height: '100vh',
        width: '100vw',
      }
    }>
      <Button />
      <div style={{
        height: '60%',
        width: '100%',
      }}>

      <Slider />
      </div>
    </div>
  )



}

export default Component;