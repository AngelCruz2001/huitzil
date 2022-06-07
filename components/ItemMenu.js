import React from 'react'
import Draggable from "react-draggable";
import { useDispatch, useSelector } from 'react-redux';
import { addElement } from '../actions/drawable';
import styles from '../styles/ItemMenu.module.scss'
export const ItemMenu = () => {
    const dispatch = useDispatch();
    const { components } = useSelector(state => state.itemsElements);

    const handleDrag = (e, ui) => {
        console.log(ui.deltaX, ui.deltaY);
    };

    const handleStop = (e, ui) => {
        console.log(ui.deltaX, ui.deltaY);
    };

    const handleStart = (e, ui) => {
        console.log(ui.deltaX, ui.deltaY);
    };

    const handleAddItem = (id, type, name) => {

        const hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        dispatch(addElement({
            id: hash,
            type,
            container: {
                x: 1,
                y: 1,
                width: 2,
                height: 2
            }
        }))
    }



    return (
        <div className={styles.listContainer}>

            <h2 className={styles.title}>Select an item</h2>

            {
                components.map(({
                    id,
                    type,
                    name,
                    imageElement, }, index) => (

                    <div className={styles.listItem} key={id} onClick={() => handleAddItem(id, type, name)}>
                        <img src={imageElement} alt="" />
                        <p>{name}</p>
                    </div>

                ))
            }
        </div>

    )
}
