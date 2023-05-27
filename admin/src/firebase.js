import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "process.env.APP_KEY",
  authDomain: "netflix-9ae49.firebaseapp.com",
  projectId: "netflix-9ae49",
  storageBucket: "netflix-9ae49.appspot.com",
  messagingSenderId: "934167384004",
  appId: "1:934167384004:web:f2d485a6553aafe82ade91",
  measurementId: "G-6H1L0W5PCC",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
