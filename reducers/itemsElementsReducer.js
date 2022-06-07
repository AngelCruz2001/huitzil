import { types } from "../types/types";

const initialState = {
    components: [
        {
            id: 1,
            type: "button",
            name: "Button",
            imageElement: "",
            style: {
                width: '100%',
                height: "100%",
                title: "Hello worlasdfd!",
                backgroundColor: "#000000",
                color: "#ffff",
                fontSize: "2rem",
                borderRadius: "0.5em",
                fontWeight: "normal",
                fontFamily: "Times New Roman",
                action: '',
                smartContract: '',
            }
        },
        {
            id: 2,
            type: "text",
            name: "Text",
            imageElement: "",
            style: {
                fontSize: '20px',
                color: 'white',
                backgroundColor: 'black',
                fontWeight: '600',
                text: 'Hello',
                action: '',
                smartContract: '',
            },
        },
        {
            id: 3,
            type: "image",
            name: "Image",
            imageElement: "",
            style: {
                URL: '',
                action: '',
                smartContract: '',
            },
        },
        {
            id: 4,
            type: "input",
            name: "Input",
            imageElement: "",
            style: {
                placeholder: '',
                type: 'text',
                name: '',
                action: '',
                smartContract: '',
            }
        },

    ],
    activeItemElement: null,

}

export const itemsElementsReducer = (state = initialState, action) => {
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

        case types.setActiveItemElement:
            return {
                ...state,
                activeItemElement: action.payload
            }

        case types.unsetActiveItemElement:
            return {
                ...state,
                activeItemElement: null
            }




        default:
            return state;
    }
}