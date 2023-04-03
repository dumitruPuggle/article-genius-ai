import Head from "next/head";
import styles from "@/styles/Home.module.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Logo } from "./components/Logo";
import { description } from "../pages/static/meta";

export default function Home() {
  return (
    <>
      <Head>
        <title>Article Genius</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Logo />
        </div>
      </main>
    </>
  );
}
