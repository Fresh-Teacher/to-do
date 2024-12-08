import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        © {new Date().getFullYear()} School Todo App. All rights reserved.
      </div>
    </footer>
  )
}