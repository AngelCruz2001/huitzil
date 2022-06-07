import { types } from "../types/types"

export const changeDrawableArea = (payload) => (
    {
        type: types.changeDrawableArea,
        payload: payload
    }
)


export const updateElementCoordinates = (payload) => (
    {
        type: types.updateElementCoordinates,
        payload: payload
    }
)    

export const addElement = (payload) => ({
    type: types.addElement,
    payload: payload
    
})