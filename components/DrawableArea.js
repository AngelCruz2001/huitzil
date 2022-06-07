import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDrawableArea } from '../actions/drawable'
import { useElement } from '../hooks/useElement'
import styles from '../styles/DrawableArea.module.scss'
import { Draggable } from './Draggable'
import { ButtonSelectable } from './itemsMenuComponents/ButtonSelectable'

export const DrawableArea = () => {
    const { elements } = useSelector(state => state.drawable)
    const dispatch = useDispatch()

    const { generateElement } = useElement()

    const drawableArea = useRef(null)

    useEffect(() => {
        dispatch(changeDrawableArea({
            maxX: drawableArea.current.clientWidth,
            maxY: drawableArea.current.clientHeight,
        }))
    }, [drawableArea.current])

    return (
        <div className={styles.mainContainer}>


            <div className={styles.drawableArea} ref={drawableArea}>
                {
                    elements.map((element, index) => (
                        <Draggable
                            idElement={element.id}
                            container={element.container}
                        >
                            {
                                console.log(element)
                            }
                            {
                                generateElement(element.type, element.id, element.action, element)
                            }
                        </Draggable>
                    ))
                }

            </div>
        </div>
    )
}
