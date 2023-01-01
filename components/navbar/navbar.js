import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <main className={styles.container}>
      <h5>Logo Here</h5>
      <div className={styles.listItems}>
        <h5 className={styles.listItem}>About</h5>
        <h5 className={styles.listItem}>Events</h5>
        <h5 className={styles.listItem}>Partners</h5>
        <h5 className={styles.support}>Support Us</h5>
      </div>
    </main>
  )
}