import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";

import Header from "../components/Header";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const [isSponsorPanelOpen, setIsSponsorPanelOpen] = useState(false);

  function changeSponsorPanelState() {
    setIsSponsorPanelOpen(!isSponsorPanelOpen);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fuutball | Home</title>
        <meta
          name="description"
          content="Fuutball - a space to see the biggest highlights of a football match"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <Header />

        <div className={styles.mainContent}>
          <article className={styles.contentContainer}>
            <div>
              <section className={styles.currentMatch}>
                <div itemID={styles.left}>
                  <h1>Barcelona</h1>
                  <p>1</p>
                </div>
                <div className={styles.line} />
                <div itemID={styles.right}>
                  <h1>Real Madrid</h1>
                  <p>2</p>
                </div>
                <section className={styles.versus}>VS</section>
                <section className={styles.createdAt}>
                  <span>20 Jan 2020</span>
                </section>
              </section>
            </div>
          </article>

          <aside className={styles.asideContainer}>
            <div className={styles.asideLimit}>
              <article>
                <div>
                  <span>
                    <FiX />
                  </span>
                </div>

                <form>
                  <input type="search" placeholder="busque por partidas" />
                </form>

                <section>
                  <Link href="/" passHref>
                    <span>atletico vs inter</span>
                  </Link>
                  <Link href="/" passHref>
                    <span>Chelsea vs Manchester United</span>
                  </Link>
                  <Link href="/" passHref>
                    <span>Everton vs Southampton</span>
                  </Link>
                  <Link href="/" passHref>
                    <span>Leicester City vs Wolverhampton Wanderers</span>
                  </Link>
                  <Link href="/" passHref>
                    <span>Aston Villa vs Liverpool</span>
                  </Link>
                </section>
              </article>

              <footer>
                <p>if you liked this site be a sponsor</p>
                <button type="button" onClick={changeSponsorPanelState}>
                  <strong>SUPPORT ME</strong>
                </button>
                <div
                  className={isSponsorPanelOpen ? styles.close : styles.open}
                >
                  <div className={styles.sponsor}>
                    <p>any amount is welcome</p>
                    <section>
                      <div>
                        <strong>PayPal | PIX</strong>
                        <p>eliasalex52@gmail.com</p>
                      </div>
                    </section>
                  </div>
                  <strong>Contact me</strong>{" "}
                  <a href="mailto:fuutball.oi@gmail.com">
                    fuutball.oi@gmail.com
                  </a>
                </div>
              </footer>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
