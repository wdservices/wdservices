import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBADY5IFU1Q5xblJrgHKUo6CioJwcKzzk0",
  authDomain: "wavesds.firebaseapp.com",
  projectId: "wavesds",
  storageBucket: "wavesds.appspot.com",
  messagingSenderId: "901876500235",
  appId: "1:901876500235:web:45334c4bcc426436b4040e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
