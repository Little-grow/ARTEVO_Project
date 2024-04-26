import styles from './ProfileWork.module.css';
import portfolioImage from '../../../public/images/profile/portfolio.png';

import imageOne from '../../../public/images/product/1.png';
import imageTwo from '../../../public/images/product/2.png';
import imageThree from '../../../public/images/product/3.png';

const ProfileWork = () => {
  const data = [
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
  ];

  const dataAll = [
    {
      productId: 1,
      image1: imageOne,
      image2: imageTwo,
      image3: imageThree,
      productName: 'Innocence',
      name: 'Mariam Said',
      description: 'Oil on canvas',
      year: 2008,
      reviews: 4100,
      price: 650,
      stars: 5,
      longDescription:
        'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
      artistId: 1,
      forSale: true,
    },
    {
      productId: 2,
      image1: imageOne,
      image2: imageTwo,
      image3: imageThree,
      productName: 'Wallowing Breeze',
      name: 'Tariq Ahmed',
      description: 'Oil on canvas',
      year: 2008,
      reviews: 4100,
      price: 650,
      stars: 5,
      longDescription:
        'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
      artistId: 1,
      forSale: false,
    },
    {
      productId: 3,
      image1: imageOne,
      image2: imageTwo,
      image3: imageThree,
      productName: 'J Resistance',
      name: 'Fatima Abbas',
      description: 'Gouache on paper',
      year: 2018,
      reviews: 4100,
      price: 650,
      stars: 5,
      longDescription:
        'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
      artistId: 2,
      forSale: false,
    },
    {
      productId: 4,
      image1: imageOne,
      image2: imageTwo,
      image3: imageThree,
      productName: 'Warm Basket',
      name: 'Nadia Salem',
      description: 'Acrylic on wood',
      year: 2014,
      reviews: 4100,
      price: 650,
      stars: 5,
      longDescription:
        'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
      artistId: 3,
      forSale: true,
    },
    {
      productId: 5,
      image1: imageOne,
      image2: imageTwo,
      image3: imageThree,
      productName: 'The Vonnegut',
      name: 'Nadia Salem',
      description: 'Oil on canvas',
      year: 2018,
      reviews: 4100,
      price: 650,
      stars: 5,
      longDescription:
        'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
      artistId: 3,
      forSale: false,
    },
  ];

  return (
    <section className={styles.work}>
      <div className={styles.work__filter}>
        <button className={styles.work__filter__btn}>For Sale</button>
        <button
          className={`${styles.work__filter__btn} ${styles.work__filter__btnActive}`}>
          Portfolio
        </button>
      </div>

      <div className={styles.work__images}>
        {data.map((item, index) => (
          <div className={styles.work__images__product}>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileWork;

