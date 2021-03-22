import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ComissionInfo } from '../components/ComissionInfo'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Comission() {
  return (
    <div>
      <Head>
        <title>Takao | About</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <section>
          <ComissionInfo />
        </section>
        <Footer />
      </div>
    </div>
  );
}