import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyCBvCR15m_QBKhHnTbDgBJRv18KHpn2N6w",
    authDomain: "cansus-01.firebaseapp.com",
    projectId: "cansus-01",
    storageBucket: "cansus-01.appspot.com",
    messagingSenderId: "271417995626",
    appId: "1:271417995626:web:007ff410b110df2997f513"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app