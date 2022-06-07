import { types } from "../types/types";

const initialState = {
    drawableArea: {
        maxX: 0,
        maxY: 0,
    },
    elements: [
        {
            id: 1,
            action: "alert('Hello Chava')",
            type: "button",
            container: {
                x: 2,
                y: 2,
                width: 3,
                height: 3

            },
            style: {
                color: "red",
                fontSize: "20px"
            }
        },
        {
            id: 1,
            action: "alert('Hello Chava')",
            type: "button",
            container: {
                x: 1,
                y: 1,
                width: 3,
                height: 3

            },
            style: {
                color: "red",
                fontSize: "20px"
            }
        }

    ],
}

export const drawableReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addElement:
            return {
                ...state,
                elements: [...state.elements, action.payload]
            }
        case types.removeElement:
            return {
                ...state,
                elements: state.elements.filter(element => element.id !== action.payload)
            }
        case types.updateElement:
            return {
                ...state,
                elements: state.elements.map(element => {
                    if (element.id === action.payload.id) {

                        return {
                            ...element,
                            ...action.payload.data
                        }
                    }
                    return element;
                })
            }
        case types.updateElementContainer:
            return {
                ...state,
                elements: state.elements.map(element => {
                    if (element.id === action.payload.id) {

                        return {
                            ...element,
                            container: {
                                ...element.container,
                                ...action.payload.data
                            }
                        }
                    }
                    return element;
                })
            }

        case types.changeDrawableArea:
            return {
                ...state,
                drawableArea: {
                    ...state.drawableArea,
                    ...action.payload
                }
            }

        case types.updateElementCoordinates:
            return {
                ...state,
                elements: state.elements.map(element => {
                    if (element.id === action.payload.id) {

                        return {
                            ...element,
                            container: {
                                ...element.container,
                                ...action.payload.data
                            }
                        }

                    }
                    return element;
                })
            }

        default:
            return state;
    }
}