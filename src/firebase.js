import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhGJnROphyanH1_i7-s50nsLMVK1Ewybw",
  authDomain: "newshoplist-f8270.firebaseapp.com",
  projectId: "newshoplist-f8270",
  storageBucket: "newshoplist-f8270.appspot.com",
  messagingSenderId: "254706160007",
  appId: "1:254706160007:web:fe734acf76c99f1faec322"
};

const firebaseApp = initializeApp(firebaseConfig);
// const database = getDatabase(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };
