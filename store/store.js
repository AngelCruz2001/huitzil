import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "../reducers/rootReducers";

//TODO: QUITAR ESTA LINEA
// const composeEnhancers = compose;
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)