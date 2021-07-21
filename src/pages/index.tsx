import Head from "next/head";
import Link from "next/link";
import { FiX } from "react-icons/fi";

import Header from "../components/Header";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
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
          <article>conteúdo principal</article>

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
                <strong>SUPPORT ME</strong>
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
                <a href="mailto:fuutball.oi@gmail.com">fuutball.oi@gmail.com</a>
              </footer>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
