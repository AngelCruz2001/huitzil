import React from 'react'
import { ButtonSelectable } from '../components/itemsMenuComponents/ButtonSelectable'
import { SliderSelectable } from '../components/itemsMenuComponents/SliderSelectable'

export const useElement = () => {




    const generateElement = (type, id, action, ...rest) => {

        switch (type) {
            case 'button':
                return <ButtonSelectable key={id}  action={action} {...rest} />
            case 'slider':
                return <SliderSelectable key={id} {...rest} />

            default:
                break;
        }
    }
    return {
        generateElement
    }
}
