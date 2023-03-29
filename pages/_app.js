import "../global.css";
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyBx6a0ht1KP3WJYELn_u_Q_M4ECwljwoSY",
  authDomain: "articlegenius-ai.firebaseapp.com",
  projectId: "articlegenius-ai",
  storageBucket: "articlegenius-ai.appspot.com",
  messagingSenderId: "676688590911",
  appId: "1:676688590911:web:086a8d15fea3feb55d208a",
});

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
