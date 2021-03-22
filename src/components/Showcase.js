import styles from '../styles/components/Showcase.module.css';
import { Artwork } from './Artwork';

export function Showcase() {
  return (
    <div className={styles.showcaseContainer}>  

      <Artwork 
        image='diva'
        imageDescription='Diva from Blood+'
      />
      <Artwork
        image='emilia'
        imageDescription='Emilia and Puck from Re:Zero'
      />
      <Artwork
        image='gabriel'
        imageDescription='Gabriel from Gabriel DropOut'
      />
      <Artwork
        image='gura'
        imageDescription='Gawr Gura - HololiveEN 1st Generation'
      />
      <Artwork
        image='botan'
        imageDescription='Shishiro Botan - HololiveJP 5th Generation'
      />
      <Artwork
        image='mafura'
        imageDescription='Mafura - Original character'
      />

      {/* <Artwork 
        image='diva'
        imageAlt='Diva from Blood+'
      /> */}
    </div>
  )
}