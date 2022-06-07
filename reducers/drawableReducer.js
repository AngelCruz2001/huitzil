import { types } from "../types/types";

const initialState = {
    drawableArea: {
        maxX: 0,
        maxY: 0,
    },
    elements: [
        // {
        //     id: 1,
        //     action: "alert('Hello Chava')",
        //     type: "button",
        //     container: {
        //         x: 2,
        //         y: 2,
        //         width: 3,
        //         height: 3

        //     },
        //     style: {
        //         width: '100%',
        //         height: "100%",
        //         title: "Hello woasdfrld!",
        //         backgroundColor: "#000000",
        //         color: "#ffff",
        //         fontSize: "2rem",
        //         borderRadius: "0.5em",
        //         fontWeight: "normal",
        //         fontFamily: "Times New Roman",
        //     }
        // },
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
            console.log("From Reducer payload updateElement: ", action.payload)
            return {
                ...state,
                elements: state.elements.map(element => {
                    if (element.id === action.payload.id) {
                        return action.payload
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

        case types.updateElement:
            return {
                ...state,
                components: state.components.map(itemElement => {
                    if (itemElement.id === action.payload.id) {
                        return {
                            ...itemElement,
                            style: {
                                ...itemElement.style,
                                ...action.payload.style
                            }
                        }
                    }
                    return itemElement;
                })
            }

        default:
            return state;
    }
}