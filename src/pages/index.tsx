import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiX, FiMenu, FiArrowRight, FiArrowDown } from "react-icons/fi";

import WinnerImg from "../../public/assets/winner.png";
import { Embed } from "../components/Embed";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [isSponsorPanelOpen, setIsSponsorPanelOpen] = useState(false);

  function changeSponsorPanelState() {
    setIsSponsorPanelOpen(!isSponsorPanelOpen);
  }
  function changeAsideState() {
    setIsAsideOpen(!isAsideOpen);
  }
  function handleReadMorePanel() {
    setIsReadMoreOpen(!isReadMoreOpen);
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

              <div
                className={`${styles.metadata} ${
                  isReadMoreOpen ? styles.open : undefined
                }`}
              >
                <button type="button" onClick={handleReadMorePanel}>
                  informações{" "}
                  {isReadMoreOpen ? <FiArrowDown /> : <FiArrowRight />}
                </button>

                <ul>
                  <li>
                    <span>Evento:</span>
                    <strong>World Cup</strong>
                  </li>
                  <li>
                    <span>País:</span>
                    <strong>Japão</strong>
                  </li>
                  <li>
                    <span>Data:</span>
                    <strong>20 Jan 2020</strong>
                  </li>
                </ul>
              </div>

              <div className={styles.winner}>
                <div>
                  <div>
                    <Image
                      src={WinnerImg}
                      width={100}
                      height={70}
                      alt="winner"
                      draggable={false}
                    />
                    <span>Vencedor:</span>
                  </div>

                  <h2>Real Madrid</h2>
                </div>
              </div>

              <Embed />
            </div>
          </article>

          <aside
            className={`${styles.asideContainer} ${
              isAsideOpen ? styles.collapse : undefined
            }`}
          >
            <button type="button" onClick={changeAsideState}>
              {isAsideOpen ? <FiMenu /> : <FiX />}
            </button>
            <div className={styles.asideLimit}>
              <article>
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
