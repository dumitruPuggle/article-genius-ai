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
          <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{'--bs-nav-link-color': 'var(--bs-white)', '--bs-nav-pills-link-active-color': 'var(--bs-primary)', '--bs-nav-pills-link-active-bg': 'var(--bs-white)'}}>
            <li className="nav-item" role="presentation">
              <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
            </li>
          </ul>
        </div>
        <div className="w-100 center container p-4">
          <h2>Check out the latest news:</h2>
          <small className="text-auto">Check out the latest news:</small>
        </div>
      </main>
    </>
  );
}
