import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Change1 About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About</h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}