import styles from './Cart.module.css';
import Navbar from '../../components/Navbar/Navbar';
import CartItem from '../../components/CartItem/CartItem';
import { useUsers } from '../../Context/UserContext';

const Cart = () => {
  const { cart } = useUsers();
  const count = cart.length || 0;
  const totalPrice =
    cart.reduce((acc, item) => {
      const price = item.price;
      return acc + price;
    }, 0) || 0;
  const tax = 2.0;
  const shipping = 3.99;
  return (
    <>
      <Navbar logoOnly={false} />
      <main>
        {cart.length > 0 ? (
          <div className={styles.container}>
            <div className={styles.description}>
              <h2 className={styles.description__head}>Cart</h2>
              <p className={styles.description__count}>{count} items</p>
            </div>
            <hr className={styles.divider} />
            <div className={styles.content}>
              <div className={styles.content__cartItems}>
                {cart.map((item, index) => (
                  <CartItem item={item} index={index} />
                ))}
              </div>
              {totalPrice > 0 && (
                <div className={styles.content__orderSummary}>
                  <h2 className={styles.content__orderSummary__head}>
                    Order summary
                  </h2>
                  <div className={styles.content__orderSummary__summary}>
                    <div
                      className={
                        styles.content__orderSummary__summary__subtotal
                      }
                    >
                      <p>Subtotal</p>
                      <p>{totalPrice.toFixed(2)} EGP</p>
                    </div>
                    <div
                      className={
                        styles.content__orderSummary__summary__shipping
                      }
                    >
                      <p>Shipping</p>
                      <p>{shipping} EGP</p>
                    </div>
                    <div className={styles.content__orderSummary__summary__tax}>
                      <p>Tax</p>
                      <p>{tax} EGP</p>
                    </div>

                    <div
                      className={styles.content__orderSummary__summary__total}
                    >
                      <p>Total</p>
                      <p>{(totalPrice + tax + shipping).toFixed(2)} EGP</p>
                    </div>
                  </div>
                  <button
                    className={styles.content__orderSummary__summary__proceed}
                  >
                    <p>Continue to payment</p>
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 7H16M16 7L10 1M16 7L10 13" stroke="white" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.containerEmpty}>
            <h1>You have No Items yet, Add Some to proceed!</h1>
          </div>
        )}
      </main>
    </>
  );
};

export default Cart;
