import { Navbar } from '../components/Navbar';
import { Profile } from '../components/Profile';
import { Footer } from '../components/Footer';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
      <meta property="og:title" content="Takao - Digital Illustrator" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio-snowy-mu.vercel.app/" />
      <meta property="og:image" content="https://portfolio-snowy-mu.vercel.app/images/preview.jpg" />
      <meta property="og:description" content="Hello! I'm a freelancer digital illustrator based in Brazil." />
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
