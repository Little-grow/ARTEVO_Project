import { useEffect, useState } from 'react';
import styles from './Slider.module.css';
import { NavLink } from 'react-router-dom';
import { useUsers } from '../../Context/UserContext';
import Stars from '../Stars/Stars';

const Slider = ({ art }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const { products } = useUsers();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 992) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const dataLength = products.length;

  const handlePrev = () => {
    setStartIndex((index) => (index - 1 + dataLength) % dataLength);
  };

  const handleNext = () => {
    setStartIndex((index) => (index + 1) % dataLength);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderContainer__slider}>
        <button
          className={styles.sliderContainer__slider__previous}
          onClick={handlePrev}>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="#222222" />
          </svg>
        </button>
        <div className={styles.sliderContainer__slider__items}>
          {startIndex + itemsToShow <= dataLength
            ? products
                .slice(startIndex, startIndex + itemsToShow)
                .map((item, index) => (
                  <>
                    {art && <Art item={item} index={index} key={index} />}
                    {!art && (
                      <div key={index} className="item">
                        {item}
                      </div>
                    )}
                  </>
                ))
            : [
                ...products.slice(startIndex),
                ...products.slice(0, startIndex + itemsToShow - dataLength),
              ].map((item, index) => (
                <>
                  {art && <Art item={item} index={index} />}
                  {!art && (
                    <div key={index} className="item">
                      {item}
                    </div>
                  )}
                </>
              ))}
        </div>

        <button
          className={styles.sliderContainer__slider__next}
          onClick={handleNext}>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="#222222" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;

export const Art = ({ item, index, rating }) => {
  const { image1, productName, productId, name, description, year, stars } =
    item;
  const { cart } = useUsers();
  const isInCart = cart.find(
    (cartItem) => cartItem.productId === item.productId,
  );

  if (isInCart) {
    return (
      <NavLink
        to={`/product/${productId}`}
        className={`${styles.sliderContainer__slider__items__item} ${styles.sliderContainer__slider__items__itemCart}`}
        key={index}>
        <img src={image1} alt={name} />
        <h3 className={styles.sliderContainer__slider__items__item__name}>
          {productName}
        </h3>
        <p className={styles.sliderContainer__slider__items__item__author}>
          {name}
        </p>
        <p className={styles.sliderContainer__slider__items__item__description}>
          {description}, {year}
        </p>
      </NavLink>
    );
  }

  if (rating) {
    return (
      <NavLink
        to={`/product/${productId}`}
        className={styles.sliderContainer__slider__items__item}
        key={index}>
        <img src={image1} alt={name} />
        <div className={styles.sliderContainer__slider__items__item__container}>
          <div>
            <h3 className={styles.sliderContainer__slider__items__item__name}>
              {productName}
            </h3>
            <p className={styles.sliderContainer__slider__items__item__author}>
              {name}
            </p>
            <p
              className={
                styles.sliderContainer__slider__items__item__description
              }>
              {description}, {year}
            </p>
          </div>
          <Stars rating={stars} />
        </div>
      </NavLink>
    );
  }

  return (
    <NavLink
      to={`/product/${productId}`}
      className={styles.sliderContainer__slider__items__item}
      key={index}>
      <img src={image1} alt={name} />
      <h3 className={styles.sliderContainer__slider__items__item__name}>
        {productName}
      </h3>
      <p className={styles.sliderContainer__slider__items__item__author}>
        {name}
      </p>
      <p className={styles.sliderContainer__slider__items__item__description}>
        {description}, {year}
      </p>
    </NavLink>
  );
};

