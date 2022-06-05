import React from 'react'
import { ButtonSelectable } from '../../components/itemsMenuComponents/ButtonSelectable'
import { Slider } from '../../components/itemsMenuComponents/Slider'
import { ConnectWalletButton } from '../../components/itemsMenuComponents/ConnectWalletButton'
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

      <ConnectWalletButton />
      </div>
    </div>
  )



}

export default Component;