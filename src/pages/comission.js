import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ComissionInfo } from '../components/ComissionInfo'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Comission() {
  return (
    <div>
      <Head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
      <meta property="og:title" content="Takao - Comission" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio-snowy-mu.vercel.app/" />
      <meta property="og:image:url" content="https://portfolio-snowy-mu.vercel.app/images/preview.jpg" />
      <meta property="og:description" content="Hello! I'm a freelancer digital illustrator based in Brazil." />
        <title>Takao | Comission</title>
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