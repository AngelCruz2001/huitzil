import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDrawableElement } from '../hooks/useDrawableElement'

import styles from '../styles/Draggable.module.scss'

export const Draggable = ({ children, idElement, container }) => {

    const { draggableElementRef, handleDrag, handleDragEnd, moveElement } = useDrawableElement(idElement, container);


    return (
        <div
            ref={draggableElementRef}
            className={styles.draggable}
            draggable
            onDragStart={handleDrag}
            onDragEnd={handleDragEnd}
            style={{
                gridArea: `${container.x} / ${container.y} / span ${container.width} / span ${container.height}`,
            }}
        >
            {children}
        </div>
    )
}
