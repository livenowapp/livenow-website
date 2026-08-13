import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNxZyaE1W9a4U_CHCY-8v6VOrqPZjim2k",
  authDomain: "livenow-749e2.firebaseapp.com",
  projectId: "livenow-749e2",
  storageBucket: "livenow-749e2.firebasestorage.app",
  messagingSenderId: "829216560808",
  appId: "1:829216560808:web:9d97d291a23f03f992d49d",
};

const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp(firebaseConfig);

export const auth = getAuth(app);