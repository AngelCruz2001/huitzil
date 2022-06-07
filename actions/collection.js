import { types } from "../types/types";
import { base } from "../apis/base";

export const startGetCollections = () => {
    return async (dispatch) => {
        const resp = await base.fetch("users/629e858dcf43caa765775349/agents");
        console.log(resp)
        dispatch(setCollections(resp.data.agents));
    }
}

export const startAddingCollection = (collection) => {
    return async (dispatch) => {
        const resp = await base.post('/users//629e858dcf43caa765775349/agents');
        dispatch(addCollection(resp.data));
    }
}



const addCollection = () => ({
    type: types.addCollection
});

const setCollections = (collections) => ({
    type: types.setCollections,
    payload: collections
});

export const setCollectionActive = (collection) => ({
    type: types.setCollectionActive,
    payload: collection
});