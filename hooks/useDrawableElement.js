import { useEffect, useRef, useState } from "react";

export const useDrawableElement = (drawableAreaX, drawableAreaY) => {
    const draggableElementRef = useRef(null)

    const [xAndY, setXAndY] = useState({ x: 1, y: 1, width: 2, height: 2, differenceX: 0, differenceY: 0 })
    console.log("DrawableAreaX: ", drawableAreaX)
    const sizeFrameX = (drawableAreaX / 10)
    const sizeFrameY = (drawableAreaY / 10)


    useEffect(() => {
        moveElement(xAndY.x, xAndY.y)
    }, [])


    const moveElement = (x, y) => {
        draggableElementRef.current.style.gridColumn = `${x} / span ${xAndY.width}`
        draggableElementRef.current.style.gridRow = `${y} / span ${xAndY.height}`
    }


    const handleDrag = (e) => {
        // console.log(draggableElement.current.offsetLeft, draggableElement.current.offsetTop)
        // console.log("Difference:", draggableElement.current.offsetLeft - e.clientX, draggableElement.current.offsetTop - e.clientY)
        setXAndY(prev => ({
            ...prev,
            differenceX: draggableElementRef.current.offsetLeft - e.clientX,
            differenceY: draggableElementRef.current.offsetTop - e.clientY
        }))
    }




    const handleDragEnd = (e) => {
        const startXComponent = (e.clientX);

        const startYComponent = (e.clientY);

        const newX = (Math.round(startXComponent / sizeFrameX));

        const newY = (Math.round(startYComponent / sizeFrameY));

        setXAndY(prev => ({
            ...prev,
            x: newX,
            y: newY
        }))

        moveElement(newX, newY)

    }

    return {
        draggableElementRef,
        xAndY,
        handleDrag,
        handleDragEnd
    }

}
