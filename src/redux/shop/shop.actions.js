import actionTypes from "./shop.types";

import { firestore, convertCollectionSnapshot } from "../../firebase/firebase.util";

export const fetchCollectionsStart = () => ({
    type: actionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collections) => ({
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: actionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())
        collectionRef.get()
        .then(snapshot => {
            const newCollection = convertCollectionSnapshot(snapshot);
            dispatch(fetchCollectionsSuccess(newCollection));
        }).catch(error => fetchCollectionsFailure(error.message));
    }
}