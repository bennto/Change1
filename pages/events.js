import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Events() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Change1 Events Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Events</h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}