import React from 'react'
import { ButtonSelectable } from '../components/itemsMenuComponents/ButtonSelectable'
import { SliderSelectable } from '../components/itemsMenuComponents/SliderSelectable'
import { InputSelectable } from '../components/itemsMenuComponents/InputSelectable'
import { ImageSelectable } from '../components/itemsMenuComponents/ImageSelectable'
export const useElement = () => {

    const generateElement = (type, id, action, style, ...rest) => {

        switch (type) {
            case 'button':
                return <ButtonSelectable key={id} action={action} style={style} />
            case 'slider':
                return <SliderSelectable key={id} style={style} />

            case 'text':
                return <InputSelectable key={id} style={style} />

            case 'image':
                return <ImageSelectable key={id} style={style} />

            default:
                break;
        }
    }
    return {
        generateElement
    }
}
