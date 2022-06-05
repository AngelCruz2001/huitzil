import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../styles/DrawableArea.module.scss'
import { Draggable } from './Draggable'
import { ButtonSelectable } from './itemsMenuComponents/ButtonSelectable'

export const DrawableArea = () => {
    const drawableArea = useRef(null)

    const [drawableAreaXY, setDrawableAreaXY] = useState({
        maxX: 0,
        maxY: 0,
    })

    useEffect(() => {
        setDrawableAreaXY({
            maxX: drawableArea.current.clientWidth,
            maxY: drawableArea.current.clientHeight,
        })
    }, [drawableArea.current])


    return (
        <div className={styles.mainContainer}>
            <nav className={styles.navbar}>
                <h3>Name application</h3>
            </nav>

            <div className={styles.drawableArea} ref={drawableArea}>
                <Draggable
                    drawableAreaX={drawableAreaXY.maxX}
                    drawableAreaY={drawableAreaXY.maxY}

                >

                    <ButtonSelectable
                        action={() => {
                            console.log("Damiany es caca")
                        }
                        }
                    />
                </Draggable>
                
            </div>
        </div>
    )
}
