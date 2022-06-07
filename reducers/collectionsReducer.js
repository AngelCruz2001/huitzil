import { types } from "../types/types";

const initialState = {
    collections: [],
    activeCollection: {
    }

}

export const collectionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addCollection:
            return {
                ...state,
                collections: [...state.collections, action.payload]
            }
        case types.setActiveCollection:
            return {
                ...state,
                activeCollection: action.payload
            }
        case types.setCollections:
            return {
                ...state,
                collections: action.payload
            }
            



        default:
            return state;
    }
}