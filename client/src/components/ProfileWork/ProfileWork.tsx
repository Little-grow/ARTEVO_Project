import styles from './ProfileWork.module.css';

import { Art } from '../Slider/Slider';
import { useState } from 'react';
import { useUsers } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const ProfileWork = ({ searchedUser }) => {
  const [forSale, setForSale] = useState(true);
  const { user } = useUsers();

  const { products } = useUsers();

  const artistForSale = products.filter(
    (item) => item.forSale === true && item.artistId === searchedUser.id,
  );
  const artistPortfolio = products.filter(
    (item) => item.forSale === false && item.artistId === searchedUser.id,
  );

  function handleForSale(e) {
    e.preventDefault();
    setForSale(true);
  }

  function handlePortfolio(e) {
    e.preventDefault();
    setForSale(false);
  }

  return (
    <section className={styles.work}>
      <div className={styles.work__filter}>
        <button
          className={`${styles.work__filter__btn} ${
            forSale && styles.work__filter__btnActive
          }`}
          onClick={(e) => handleForSale(e)}>
          For Sale
        </button>
        <button
          className={`${styles.work__filter__btn} ${
            !forSale && styles.work__filter__btnActive
          }`}
          onClick={(e) => handlePortfolio(e)}>
          Portfolio
        </button>
      </div>
      {searchedUser.id === user.id && (
        <Link className={styles.new} to={'/new'}>
          +
        </Link>
      )}

      <div className={styles.work__images}>
        {forSale
          ? artistForSale.length === 0
            ? searchedUser.id === user.id
              ? 'You dont have anything to sell yet Add now!'
              : `${searchedUser.name} doesnt have anything to sell yet`
            : artistForSale.map((item, index) => (
                <Art
                  item={item}
                  index={index}
                  rating={true}
                  key={item.productId}
                />
              ))
          : ''}

        {!forSale
          ? artistPortfolio.length === 0
            ? searchedUser.id === user.id
              ? 'You dont have anything in your portfolio yet Add now!'
              : `${searchedUser.name} doent have anything in portfolio yet`
            : artistPortfolio.map((item, index) => (
                <Art item={item} index={index} rating={true} key={index} />
              ))
          : ''}
      </div>
    </section>
  );
};

export default ProfileWork;

