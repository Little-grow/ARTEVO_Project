import { Link } from 'react-router-dom';
import styles from './Artist.module.css';

const Artist = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.id}`} className={styles.artist}>
      <div className={styles.artist__image}>
        <img src={artist.image} alt="" className={styles.artist__image__img} />
      </div>
      <h2>{artist.name}</h2>
      <p>@{artist.userName}</p>
    </Link>
  );
};

export default Artist;

