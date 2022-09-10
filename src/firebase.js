import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCtQ_lkK4gfpRbLp-NsrryCMC9Bs4tz_f0',
    authDomain: 'disneyplus-clone-8e0fc.firebaseapp.com',
    projectId: 'disneyplus-clone-8e0fc',
    storageBucket: 'disneyplus-clone-8e0fc.appspot.com',
    messagingSenderId: '444677127822',
    appId: '1:444677127822:web:e2c78a6949218719ed53df',
    measurementId: 'G-D90KVB12VP',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage, signInWithPopup };
export default db;
