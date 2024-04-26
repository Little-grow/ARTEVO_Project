import Slider from '../Slider/Slider';
import styles from './FeaturedPieces.module.css';

const FeaturedPieces = ({ renderTime }) => {
  return (
    <section className={styles.featuredPieces}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.head__header}>Featured Pieces</h2>
        </div>
        <div className={styles.content}>
          <Slider art={true}></Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPieces;

