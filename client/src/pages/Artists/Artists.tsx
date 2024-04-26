import { Link } from 'react-router-dom';
import { useUsers } from '../../Context/UserContext';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Artists.module.css';
import Artist from '../../components/Artist/Artist';

const Artists = () => {
  const { users } = useUsers();
  return (
    <>
      <Navbar logoOnly={false} />
      <main>
        <div className={styles.container}>
          {users.map((artist) => {
            return <Artist artist={artist} key={artist.id} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Artists;

