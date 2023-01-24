import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'
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
          Welcome to <Link href="#">Paperless!</Link>
        </h1>
        <p className={styles.description}>
                  A futuristic WebApp to <Link href="#">SAVE PAPER</Link> in Schools!
        </p>
        <div className={styles.grid}>
          <Link href="/signup" className={styles.card}>
            <h2 style={{padding:"2rem",cursor:"pointer"}} >Sign Up </h2>
          </Link>
          <Link href="/signin" className={styles.card}>
            <h2 style={{padding:"2rem",cursor:"pointer"}} >Sign In </h2>
          </Link>       
        </div>
      </main>
      <footer className={styles.footer}>
          Made by Gaurav Pandey!
      </footer>
    </div>
  )
}
export default Home