import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArZp6BcTxlf4ZsW3wpngiMnH3aRkiL3IA",
  authDomain: "neateast-9c537.firebaseapp.com",
  databaseURL: "https://neateast-9c537-default-rtdb.firebaseio.com",
  projectId: "neateast-9c537",
  storageBucket: "neateast-9c537.firebasestorage.app",
  messagingSenderId: "1037841440471",
  appId: "1:1037841440471:web:ab2679554d2097571f5a92"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };