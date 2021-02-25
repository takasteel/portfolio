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
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Artstation</a>
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