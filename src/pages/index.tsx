import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fuutball | Home</title>
        <meta name="description" content="Fuutball - a space to see the biggest highlights of a football match" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <Header />
      </main>
    </div>
  )
}
