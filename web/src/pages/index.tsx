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
        <div className={`${styles.pageBody} container-sm`}>
          <p>
            Article Genius AI, the revolutionary new tool for creating
            high-quality content in record time! With the power of advanced
            artificial intelligence and natural language processing, Article
            Genius AI can help you write articles that are not only informative
            and engaging, but also optimized for search engines.
          </p>
          <small>
            Gone are the days of spending hours researching, drafting, and
            editing articles. With Article Genius AI, you simply provide a topic
            or keyword, and let the AI do the rest. The system will generate a
            high-quality article for you in just minutes, complete with relevant
            keywords and phrases to boost your search engine rankings.
          </small>
          <p></p>
          <small>
            But that's not all. Article Genius AI can also help you tailor your
            content to specific audiences. Simply specify the target audience,
            and the system will use advanced natural language processing to
            ensure that your article is written in a tone and style that
            resonates with that audience.
          </small>
          <p></p>
          <small>
            And if you're worried about the quality of the content generated by
            AI, don't be. Article Genius AI uses the latest in machine learning
            algorithms to ensure that the articles it produces are not only
            accurate and informative, but also engaging and well-written.
          </small>
          <div
          style={{width: '100px', margin: 20}}
            className={styles.NSCocoaButton}
          >
            <div className={styles.NSCocoaLabel}>Hello </div>
            <div className={styles.NSCocoaBlur}></div>
          </div>
        </div>
      </main>
    </>
  );
}
