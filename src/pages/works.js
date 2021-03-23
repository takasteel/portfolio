import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Showcase } from '../components/Showcase';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Works() {
  return (
  <div>
    <Head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
      <meta property="og:title" content="Takao - Works" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio-snowy-mu.vercel.app/" />
      <meta property="og:image:url" content="https://portfolio-snowy-mu.vercel.app/preview.jpg" />
      <meta property="og:description" content="Hello! I'm a freelancer digital illustrator based in Brazil." />
      <title>Takao | Works</title>
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
