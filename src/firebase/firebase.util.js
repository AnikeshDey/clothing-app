import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyAlAc14KXIoxvmwvVLdkECFTRVzpGGhvgU",
    authDomain: "crwn-db-44968.firebaseapp.com",
    projectId: "crwn-db-44968",
    storageBucket: "crwn-db-44968.appspot.com",
    messagingSenderId: "941256212048",
    appId: "1:941256212048:web:7f22a70ec58c9e4cd35b55",
    measurementId: "G-HB447MP9C1"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(err){
            console.log(err);
        }
    }
    
    return userRef;
}

export const addCollectionandDocuments = async ( collectionKey, objectsToAdd ) => {
    const collectionRef =  firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach(({title, items}) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, {title, items });
    })

    return await batch.commit();
}

export const convertCollectionSnapshot = ( collectionSnapshot ) => {
    const transformedCollection = collectionSnapshot.docs.map(snapShot => {
        const { title, items } = snapShot.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: snapShot.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
    .then()
    .catch(err => console.log(err));
}

export default firebase;