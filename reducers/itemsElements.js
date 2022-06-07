import { types } from "../types/types";

const initialState = {
    components: [
        {
            id: 1,
            type: "button",
            name: "Button",
            imageElement: "",
        }
    ],
    activeItemElement: {
        id: 1,
        type: "button",
        name: "Button",
        imageElement: "",
    },

}

export const itemsElements = (state = initialState, action) => {
    switch (action.type) {
        case types.addItemElement:
            return {
                ...state,
                components: [...state.components, action.payload]
            }
        case types.removeItemElement:
            return {
                ...state,
                components: state.components.filter(itemElement => itemElement.id !== action.payload)
            }
                        
        default:
            return state;
    }
}