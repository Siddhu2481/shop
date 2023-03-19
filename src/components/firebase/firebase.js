import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setDoc, getDoc, doc, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const firebaseConfig = {
  apiKey: "AIzaSyBhaazIiNV26kP-afhhryeZgFq1Y5Y6bkk",
  authDomain: "fashiohut.firebaseapp.com",
  projectId: "fashiohut",
  storageBucket: "fashiohut.appspot.com",
  messagingSenderId: "639849430579",
  appId: "1:639849430579:web:1e816815b789113ebced46",
  measurementId: "G-GGMENSKZ8K",
};

export const createUserProfileDoc = async (userAuth) => {
  if (userAuth == null) return;

  const docRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(db, "users", userAuth.uid), {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  Swal.fire({ text: "Successfully Signed In." });

  return docRef;
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
