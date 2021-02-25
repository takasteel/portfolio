import Link from 'next/link';

import styles from '../styles/components/Navbar.module.css';

export function Navbar() {
  return(
    <nav className={styles.navContainer}>
      <div className={styles.navLogoContainer}>
        <a href="/" className={styles.navLogo}>
          <span>Takao</span>
          <span>Digital illustrator</span>
        </a>
      </div>
      <div className={styles.navLinksContainer}>
        <ul className={styles.navLinks}>
          <Link href="/">
            <li>
              <a>About</a>
            </li> 
          </Link>
          <Link href="/works">
            <li>
              <a>Works</a>
            </li>
          </Link>
          <Link href="/comission">
            <li>
              <a>Comission</a>
            </li>
          </Link>
          <Link href="/contact">
            <li>
              <a>Contact</a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}