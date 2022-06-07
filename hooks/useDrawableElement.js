import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateElementCoordinates } from "../actions/drawable";

export const useDrawableElement = (idElement, container) => {
    const draggableElementRef = useRef(null)
    const dispatch = useDispatch();
    const drawableArea = useSelector(state => state.drawable.drawableArea)
    const [xAndY, setXAndY] = useState(container)
    const sizeFrameX = (drawableArea.maxX / 10)
    const sizeFrameY = (drawableArea.maxY / 10)


    useEffect(() => {
        moveElement(xAndY.x, xAndY.y, xAndY.width, xAndY.height)
    }, [draggableElementRef])


    const moveElement = (x, y, width, height) => {

        if (x + width > 10) {
            x = 11 - width
        }
        if (y + height > 10) {
            y = 11 - height
        }
        if (x < 0) {
            x = 0
        }
        if (y < 0) {
            y = 0
        }

        dispatch(updateElementCoordinates({
            id: idElement,
            x: x,
            y: y,
            width: width,
            height: height
        }))

        draggableElementRef.current.style.gridColumn = `${x} / span ${width}`
        draggableElementRef.current.style.gridRow = `${y} / span ${height}`
    }



    const handleDrag = (e) => {
        // console.log(draggableElement.current.offsetLeft, draggableElement.current.offsetTop)
        // console.log("Difference:", draggableElement.current.offsetLeft - e.clientX, draggableElement.current.offsetTop - e.clientY)
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

        moveElement(newX, newY, xAndY.width, xAndY.height)

    }

    return {
        draggableElementRef,
        xAndY,
        handleDrag,
        handleDragEnd,
        moveElement
    }

}
