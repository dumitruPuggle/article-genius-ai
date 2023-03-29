import { useEffect } from "react";
import styles from "../styles/home.module.css";
import { doc, getFirestore, getDoc } from "firebase/firestore";

function Home() {
  const db = getFirestore();
  useEffect(async () => {
    const docRef = doc(db, "ProductionArticles", "fVSlPIyK0NfN0fLhoiBr");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  }, []);
  return <main className={styles.main}>Watch out the latest articles:</main>;
}

export default Home;
