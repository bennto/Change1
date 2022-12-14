import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Change1 Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Head 1</h1>
        <h2>Head 2</h2>
        <h3>Head 3</h3>
        <h4>Head 4</h4>
        <h5>Head 5</h5>
        <p>Para</p>
      </main>

      <footer>
      </footer>
    </div>
  )
}