import React, { useCallback, useEffect, useRef, useState } from 'react'

import styles from '../styles/DrawableArea.module.scss'

export const DrawableArea = () => {
    const draggableElement = useRef(null)
    const drawableArea = useRef(null)
    const [xAndY, setXAndY] = useState({ x: 1, y: 1, width: 2, height: 2, differenceX: 0, differenceY: 0 })
    const matrixNumber = 10
    const [percentajeMatrix, setPercentajeMatrix] = useState("20% 20% 20% 20% 20%")
    useEffect(() => {
        let gridSizes = "";
        const percentajeEach = 100 / matrixNumber;
        for (let i = 0; i < matrixNumber; i++) {
            console.log(percentajeEach)
            gridSizes += `${percentajeEach}% `
        }
        setPercentajeMatrix(gridSizes)

    }, [matrixNumber])

    const sizeFrameX = (drawableArea.current?.clientWidth / matrixNumber)
    const sizeFrameY = (drawableArea.current?.clientHeight / matrixNumber)

    const handleDrag = (e) => {
        // console.log(e.clientX, e.clientY)
        console.log(draggableElement.current.offsetLeft, draggableElement.current.offsetTop)
        console.log("Difference:", draggableElement.current.offsetLeft - e.clientX, draggableElement.current.offsetTop - e.clientY)

        setXAndY(prev => ({
            ...prev,
            differenceX: draggableElement.current.offsetLeft - e.clientX,
            differenceY: draggableElement.current.offsetTop - e.clientY
        }))

    }

    const handleDragEnd = (e) => {

        console.log("ActualBox ",
            Math.round(e.clientX / (drawableArea.current.clientWidth / matrixNumber))
            , Math.round(e.clientY / (drawableArea.current.clientHeight / matrixNumber)))
        const startXComponent = (e.clientX);
        const startYComponent = (e.clientY);

        const newX = (Math.round(startXComponent / sizeFrameX))
        const newY = (Math.round(startYComponent / sizeFrameY));

        console.log("NEWS", newX, newY)

        setXAndY(prev => ({
            ...prev,
            x: newX,
            y: newY
        }))
    }
    return (
        <div className={styles.mainContainer}>
            <nav className={styles.navbar}>
                <h3>Name application</h3>
            </nav>

            <div className={styles.drawableArea} ref={drawableArea} style={{
                gridTemplateColumns: percentajeMatrix,
                gridTemplateRows: percentajeMatrix
            }}>
                <div
                    ref={draggableElement}
                    className={styles.elementInside}
                    draggable
                    onDragStart={handleDrag}
                    onDragEnd={handleDragEnd}
                    style={{
                        gridColumn: `${xAndY.x} / span ${xAndY.width}`,
                        gridRow: `${xAndY.y} / span ${xAndY.height}`
                    }}
                >
                </div>

            </div>
        </div>
    )
}
