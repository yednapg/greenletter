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
                  A futuristic WebApp to <Link href="#" className={styles.blue}>SAVE PAPER</Link> in Schools!
        </p>
        <div className={styles.grid}>
            <div>
          <Link href="/signup" className={styles.card}>
            <>
            <h2 style={{padding:"2rem"}} >Sign Up </h2>
            {/* <p>Register as an admin of your institution to manage students.</p> */}
            </>
          </Link>
            </div>
          <div>
          </div>
          <Link href="/signin" className={styles.card}>
            <>
            <h2 style={{padding:"2rem"}} >Sign In </h2>
            <div></div>
            <br  />
            {/* <p  >Login as an admin of your institution to see or update Students data.</p> */}
            </>
          </Link>       
        </div>
      </main>
      <footer className={styles.footer}>
          Made by team GRS!
      </footer>
    </div>
  )
}
export default Home