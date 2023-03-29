import { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import { doc, getFirestore, getDoc } from "firebase/firestore";

function Home() {
  const db = getFirestore();
  const [docs, setDocs] = useState([]);
  useEffect(async () => {
    const docRef = doc(db, "ProductionArticles", "fVSlPIyK0NfN0fLhoiBr");
    const docSnap = await getDoc(docRef);
    setDocs((prev) => [...prev, docSnap.data()]);
  }, []);
  console.log(docs);
  return (
    <main className={styles.main}>
      <h3>Watch out the latest articles:</h3>
      {docs && (
        <div>
          <p>{docs[0]?.title}</p>
          <small>{docs[0]?.bodyText}</small>
        </div>
      )}
    </main>
  );
}

export default Home;
