import styles from '../styles/components/Artwork.module.css'
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#__next');

export function Artwork({ image, imageDescription }) {
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);

  function handleOpenImageModal() {
    setImageModalIsOpen(true);
  }

  function handleCloseImageModal() {
    setImageModalIsOpen(false);
  } 

  return(
    <div className={styles.imageContainer}>
      <div 
        className={styles.imageOverlay}
        onClick={handleOpenImageModal}
      >
        <p>{imageDescription}</p>
      </div>

      <img 
        src={`/images/${image}.webp`} 
        alt={imageDescription}
        className={styles.square}
      />

      <Modal
        isOpen={imageModalIsOpen}
        onRequestClose={handleCloseImageModal}
        contentLabel="Modal with better resolution image"
        overlayClassName={styles.modalOverlay}
        className={styles.modalContent}
      >
        <button 
          type="button" 
          onClick={handleCloseImageModal}
          className={styles.modalClose}
        >
          <img src="/svg/close.svg" alt="Close modal"/>
        </button>
        <img 
          src={`/images/${image}_big.webp`} 
          alt={imageDescription} 
          className={styles.modalImage}
        />
      </Modal>
    </div>
  );
}