import { useUsers } from '../../Context/UserContext';
import styles from './CartItem.module.css';

const CartItem = ({ item, index }) => {
  const { image1, productName, price, productId } = item;
  const { setCart } = useUsers();

  function handleItemDelete(e, setCart) {
    e.preventDefault();
    setCart((cart) => cart.filter((item) => item.productId !== productId));
  }
  return (
    <div className={styles.cartItem} key={index}>
      <div className={styles.cartItem__image}>
        <img src={image1} alt="" className={styles.cartItem__image__img} />
      </div>
      <button
        className={styles.cartItem__delete}
        onClick={(e) => handleItemDelete(e, setCart)}
      >
        X
      </button>
      <div className={styles.cartItem__description}>
        <div className={styles.cartItem__description__details}>
          <p className={styles.cartItem__description__details__name}>
            {productName}
          </p>
        </div>
        <p className={styles.cartItem__description__price}>
          <b style={{ fontSize: '32px' }}>{price}</b> EGP
        </p>
      </div>
    </div>
  );
};

export default CartItem;
