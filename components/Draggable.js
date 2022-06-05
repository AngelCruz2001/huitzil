import React from 'react'
import { useDrawableElement } from '../hooks/useDrawableElement'

import styles from '../styles/Draggable.module.scss'

export const Draggable = ({ children, drawableAreaX, drawableAreaY }) => {
    console.log("DrawableAreaX: ", drawableAreaX)
    const { draggableElementRef, xAndY, handleDrag, handleDragEnd } = useDrawableElement(drawableAreaX, drawableAreaY);
    return (
        <div
            ref={draggableElementRef}
            className={styles.draggable}
            draggable
            onDragStart={handleDrag}
            onDragEnd={handleDragEnd}
            // style={{
            //     gridColumn: `${xAndY.x} / span ${xAndY.width}`,
            //     gridRow: `${xAndY.y} / span ${xAndY.height}`
            // }}
        >
            {children}
        </div>
    )
}
