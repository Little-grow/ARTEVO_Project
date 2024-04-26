import { NavLink } from 'react-router-dom';
import Stars from '../Stars/Stars';
import styles from './Products.module.css';
import { useUsers } from '../../Context/UserContext';

const Products = ({ data, pageMaximumContent, pageNumber }) => {
  const startIndex = (pageNumber - 1) * pageMaximumContent;
  const endIndex = Math.min(startIndex + pageMaximumContent, data.length);
  const { cart } = useUsers();

  const pageData = data.slice(startIndex, endIndex);

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <div className={styles.productsDiv}>
          {pageData.map((item, index) => {
            // Check if the item is in the cart
            const isInCart = cart.find(
              (cartItem) => cartItem.productId === item.productId,
            );
            return (
              <>
                {/* Render different content based on whether the item is in the cart */}
                {isInCart ? (
                  <NavLink
                    key={index}
                    to={`/product/${item.productId}`}
                    className={`${styles.productsDiv__product} ${styles.productsDiv__productCart}`}>
                    <img
                      src={item.image1}
                      alt={item.productName}
                      className={styles.productsDiv__product__img}
                    />
                    <div className={styles.productsDiv__product__info}>
                      <div className={styles.productsDiv__product__info__text}>
                        <h4>{item.productName}</h4>
                        <h5 className={styles.productsDiv__product__author}>
                          {item.name}
                        </h5>
                      </div>
                      {/* Assuming Stars component exists */}
                      <Stars />
                    </div>
                    {item.forSale === true && (
                      <>
                        <p className={styles.productsDiv__product__reviews}>
                          {item.reviews}) Customer Reviews
                        </p>
                        <p className={styles.productsDiv__product__price}>
                          {item.price} EGP
                        </p>{' '}
                      </>
                    )}
                  </NavLink>
                ) : (
                  <NavLink
                    to={`/product/${item.productId}`}
                    className={styles.productsDiv__product}>
                    <img
                      src={item.image1}
                      alt={item.productName}
                      className={styles.productsDiv__product__img}
                    />
                    <div className={styles.productsDiv__product__info}>
                      <div className={styles.productsDiv__product__info__text}>
                        <h4>{item.productName}</h4>
                        <h5 className={styles.productsDiv__product__author}>
                          {item.name}
                        </h5>
                      </div>
                      {/* Assuming Stars component exists */}
                      <Stars />
                    </div>
                    {item.forSale === true && (
                      <>
                        <p className={styles.productsDiv__product__reviews}>
                          {item.reviews}) Customer Reviews
                        </p>
                        <p className={styles.productsDiv__product__price}>
                          {item.price} EGP
                        </p>
                      </>
                    )}
                  </NavLink>
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;

