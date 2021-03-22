import styles from '../styles/components/Footer.module.css'

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <span>&copy; All rights reserved</span>
      <nav className={styles.footerLinks}>
        <a href="https://www.instagram.com/takaoart/">
          <img src="svg/instagram.svg" alt="Instagram"/>
        </a>
        <a href="https://twitter.com/takao_art">
          <img src="svg/twitter.svg" alt="Twitter"/>
        </a>
        <a href="https://www.artstation.com/takaoart">
          <img src="svg/artstation.svg" alt="Artstation"/>
        </a>
      </nav>
    </div>
  )
}