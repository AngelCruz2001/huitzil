
import { combineReducers } from "redux";
import { itemsElements } from "./itemsElements";
import { drawableReducer } from "./drawableReducer";
import { projectReducer } from "./projectReducer";
import { collectionsReducer } from "./collectionsReducer";

export const rootReducers = combineReducers({
    // reducers
    itemsElements: itemsElements,
    drawable: drawableReducer,
    project: projectReducer,
    collection:collectionsReducer
});