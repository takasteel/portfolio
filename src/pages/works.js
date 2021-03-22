import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Showcase } from '../components/Showcase';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Works() {
  return (
  <div>
    <Head>
      <title>Takao | About</title>
    </Head>
    <div className={styles.container}>
      <Navbar />
      <section>
        <Showcase />
      </section>
    </div>
    <Footer />
  </div>
  )
}
