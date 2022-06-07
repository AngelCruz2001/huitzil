import { types } from "../types/types";
import { base } from "../apis/base";

export const startGetCollections = () => {
    return async (dispatch) => {
        const resp = await base.get("users/629e858dcf43caa765775349/agents");
        // console.log('resp',resp)

        dispatch(setCollections(resp.data.data.agents));
    }
}

export const startAddingCollection = (collection) => {
    return async (dispatch) => {
        const resp = await base.post('/users/629e858dcf43caa765775349/agents');
        dispatch(addCollection(resp.data));
    }
}



export const addCollection = (name) => ({
    type: types.addCollection,
    payload: name
});

const setCollections = (collections) => ({
    type: types.setCollections,
    payload: collections
});

export const setCollectionActive = (collection) => ({
    type: types.setCollectionActive,
    payload: collection
});