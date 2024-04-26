import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Search.module.css';
import { useUsers } from '../../Context/UserContext';
import { Art } from '../../components/Slider/Slider';
import Artist from '../../components/Artist/Artist';

const Search = () => {
  const [category, setCategory] = useState('products');
  const { products, users } = useUsers();
  const [search, setSearch] = useState('');

  function handleSetProducts(e) {
    e.preventDefault();
    setCategory('products');
  }
  function handleSetArtists(e) {
    e.preventDefault();
    setCategory('artists');
  }
  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <>
      <Navbar logoOnly={false} />
      <div className={styles.container}>
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            className={styles.searchBar}
            onChange={(e) => handleChange(e)}
          />
          <div className={styles.categories}>
            <button
              className={`${styles.category} ${
                category === 'products' ? styles.categoryActive : ''
              }`}
              onClick={(e) => handleSetProducts(e)}>
              Products
            </button>
            <button
              className={`${styles.category}  ${
                category === 'artists' ? styles.categoryActive : ''
              }`}
              onClick={(e) => handleSetArtists(e)}>
              Artists
            </button>
          </div>

          <div className={styles.results}>
            {search === ''
              ? ''
              : category === 'products' &&
                products.map((product) => {
                  if (
                    product.productName
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    product.name.toLowerCase().includes(search.toLowerCase()) ||
                    product.description
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    product.longDescription
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return <Art item={product} />;
                  }
                })}

            {search === ''
              ? ''
              : category === 'artists' &&
                users.map((artist) => {
                  if (
                    artist.username
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    artist.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return <Artist artist={artist} />;
                  }
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

