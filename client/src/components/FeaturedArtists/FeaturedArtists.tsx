import styles from './FeaturedArtists.module.css';

import image1 from '../../../public/images/featured_artists/1.png';
import image2 from '../../../public/images/featured_artists/2.png';
import image3 from '../../../public/images/featured_artists/3.png';

const FeaturedArtists = ({ renderTime }) => {
  const artists = [
    {
      image: image1,
      name: 'Tariq Ahmed',
      username: '@tarekahmed',
    },
    {
      image: image2,
      name: 'Nadia Salem',
      username: '@nadiasalem',
    },
    {
      image: image3,
      name: 'Layla Hazem',
      username: '@laylahazem',
    },
  ];
  console.log(
    'FeaturedArtists rendered in: ',
    renderTime ? renderTime.toFixed(2) : 0,
    'ms',
  );
  return (
    <section className={styles.featuredArtists}>
      <div className={styles.container}>
        <h2 className={styles.header}>Featured Artists</h2>
        <div className={styles.artists}>
          {artists.map((artist, index) => (
            <div key={index} className={styles.artists__artist}>
              <img src={artist.image} alt={artist.name} />
              <div className={styles.artists__artist__name}>
                <h3>{artist.name}</h3>
                <p>{artist.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
