import { Navbar } from '../components/Navbar';
import { Profile } from '../components/Profile';

import Head from 'next/Head';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Takao | About</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <section>
          <Profile />
        </section>
      </div>
    </div>
  )
}
