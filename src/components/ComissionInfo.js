import styles from '../styles/components/ComissionInfo.module.css'

export function ComissionInfo() {
  return(
    <div className={styles.container}>
      <h2>Comissions are currently <span>closed</span></h2>
      <p>Follow me on my socials so you get to know when my comissions are open!</p>
    </div>
  );
}