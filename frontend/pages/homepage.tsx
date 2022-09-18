import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paperless</title>
        <meta name="description" content="An app to digitize school process" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Paperless!</a>
        </h1>
        <p className={styles.description}>
                  A futuristic WebApp to <a href="https://nextjs.org" className={styles.blue}>SAVE PAPER</a> in Schools!
        </p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Sign Up &rarr;</h2>
            <p>Register as an admin of your institution to manage students.</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Sign In &rarr;</h2>
            <p>Login as an admin of your institution to see or update Students data.</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
          Made by team GRS!
      </footer>
    </div>
  )
}
export default Home