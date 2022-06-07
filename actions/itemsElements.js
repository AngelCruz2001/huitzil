import { types } from "../types/types"

export const setActiveItemElement = (payload) => ({
    type: types.setActiveItemElement,
    payload: payload
})

export const unsetActiveItemElement = () => ({
    type: types.unsetActiveItemElement,
})

export const startSetActiveItemElement = (id) => {
    return (dispatch, getState) => {
        const { elements } = getState().drawable;
        
        const newPayload = elements.filter(drawItem => drawItem.id ===id)[0]
        dispatch(setActiveItemElement(newPayload))
    }
}

