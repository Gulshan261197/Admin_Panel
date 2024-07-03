import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "******************************",
  authDomain: "mern-blog-95d9d.firebaseapp.com",
  projectId: "mern-blog-95d9d",
  storageBucket: "mern-blog-95d9d.appspot.com",
  messagingSenderId: "885786669911",
  appId: "1:885786669911:web:338be4ad29b75fb123c412"
};

export const app = initializeApp(firebaseConfig);