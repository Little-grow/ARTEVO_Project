import { Link } from 'react-router-dom';
import { useUsers } from '../../Context/UserContext';
import styles from './FeaturedArtists.module.css';

const FeaturedArtists = () => {
  const { users } = useUsers();
  const top3Artist = users.sort((a, b) => b.followersArray?.length - a.followersArray?.length)
    .slice(0, 3);
  return (
    <section className={styles.featuredArtists}>
      <div className={styles.container}>
        <h2 className={styles.header}>Featured Artists</h2>
        <div className={styles.artists}>
          {top3Artist.map((artist, index) => (
            <Link
              to={`/artist/${artist.id}`}
              key={index}
              className={styles.artists__artist}>
              <img src={artist.image} alt={artist.name} />
              <div className={styles.artists__artist__name}>
                <h3>{artist.name}</h3>
                <p>@{artist.username}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;

