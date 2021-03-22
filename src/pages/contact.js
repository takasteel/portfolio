import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Takao | About</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <section>
          <ContactForm />
        </section>
        <Footer />
      </div>
    </div>
  )
}
