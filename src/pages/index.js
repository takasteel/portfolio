import { Navbar } from '../components/Navbar';
import { Profile } from '../components/Profile';
import { Footer } from '../components/Footer';

import Head from 'next/head';

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
        <Footer />
      </div>
    </div>
  )
}
