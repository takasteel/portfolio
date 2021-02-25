import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImageContainer}>
        <img src="profile.jpg" alt="Profile"/>
      </div>
      <div className={styles.profileDescriptionContainer}>
        <h2>Takao</h2>
        <div className={styles.profileInfoContainer}>
          <p>
            Hello! I'm a freelancer digital illustrator based in Brazil.
          </p>
          <p>
            I mainly draw girls mixing anime and semi-realistic styles.
          </p>
        </div>
        <div className={styles.profileContactContainer}>
          <span>My socials</span>
          <div className={styles.profileSocials}>
            <a href="https://www.instagram.com/takaoart/">Instagram</a>
            <a href="https://twitter.com/takao_art">Twitter</a>
            <a href="https://www.artstation.com/takaoart">Artstation</a>
          </div>
          <span>Contact email</span>
          <div className={styles.profileEmail}>
            <span>designtakao@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}