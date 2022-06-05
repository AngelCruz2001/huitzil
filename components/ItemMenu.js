import React from 'react'
import Draggable from "react-draggable";
import styles from '../styles/ItemMenu.module.scss'
export const ItemMenu = () => {

    const handleDrag = (e, ui) => {
        console.log(ui.deltaX, ui.deltaY);
    };

    const handleStop = (e, ui) => {
        console.log(ui.deltaX, ui.deltaY);
    };

    const handleStart = (e, ui) => {
        console.log(ui.deltaX, ui.deltaY);
    };

    return (
        <div className={styles.listContainer}>

            <p>Select an item</p>

            <div className={styles.listItem}>
                <img src="" alt="" />
                <p>Item 1</p>
            </div>
        </div>


        // <div className={styles.listItem}>
        //     <img src="" alt="" />
        //     <p>Item 2</p>
        // </div>

        // <div className={styles.listItem}>
        //     <img src="" alt="" />
        //     <p>Item 3</p>
        // </div>

        // <div className={styles.listItem}>
        //     <img src="" alt="" />
        //     <p>Item 4</p>
        // </div>

    )
}
