import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSetActiveItemElement } from '../actions/itemsElements'
import { useDrawableElement } from '../hooks/useDrawableElement'

import styles from '../styles/Draggable.module.scss'

export const Draggable = ({ children, idElement, container }) => {
    const dispatch = useDispatch();
    const { activeItemElement } = useSelector(state => state.itemsElements);
    const { draggableElementRef, handleDrag, handleDragEnd, moveElement } = useDrawableElement(idElement, container);

    const handleSetActiveElement = (idElement) => {
        dispatch(startSetActiveItemElement(idElement))
    }


    return (
        <div
            ref={draggableElementRef}
            className={styles.draggable}
            onClick={() => handleSetActiveElement(idElement)}
            draggable
            onDragStart={handleDrag}
            onDragEnd={handleDragEnd}
            name='box'
            style={{
                boxShadow: activeItemElement?.id === idElement ? '0px 0px 10px 1px #48d0cc' : 'inset 0px 0px 1px 1px rgba(0, 0, 0, 0.5)'
            }}
        >
            {children}
        </div>
    )
}
