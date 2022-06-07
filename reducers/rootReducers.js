
import { combineReducers } from "redux";
import { itemsElementsReducer } from "./itemsElementsReducer";
import { drawableReducer } from "./drawableReducer";
import { projectReducer } from "./projectReducer";
import { collectionsReducer } from "./collectionsReducer";

export const rootReducers = combineReducers({
    // reducers
    itemsElements: itemsElementsReducer,
    drawable: drawableReducer,
    project: projectReducer,
    collection:collectionsReducer
});