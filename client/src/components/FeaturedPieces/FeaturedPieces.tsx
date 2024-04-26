import Slider from '../Slider/Slider';
import styles from './FeaturedPieces.module.css';

import imageOne from '../../../public/images/featured_pieces/1.png'; // Import image files
import imageTwo from '../../../public/images/featured_pieces/2.png'; // Import image files
import imageThree from '../../../public/images/featured_pieces/3.png'; // Import image files
import imageFour from '../../../public/images/featured_pieces/4.png'; // Import image files
import imageFive from '../../../public/images/featured_pieces/5.png'; // Import image files

const FeaturedPieces = ({ renderTime }) => {
  const data = [
    {
      productId: 1,
      image1: imageOne,
      image2: imageOne,
      image3: imageOne,
      productName: 'Innocence',
      name: 'Mariam Said',
      description: 'Oil on canvas',
      year: 2008,
      reviews: 4100,
      price: 650,
      stars: 5,
      longDescription:
        'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
    },
    {
      productId: 2,
      image1: imageTwo,
      image2: imageTwo,
      image3: imageTwo,
      productName: 'Wallowing Breeze',
      name: 'Tariq Ahmed',
      description: 'Oil on canvas',
      year: 2008,
      reviews: 4100,
      price: 650,
      stars: 5,
      longDescription:
        'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
    },
    {
      productId: 3,
      image1: imageThree,
      image2: imageThree,
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
    },
    {
      productId: 4,
      image1: imageFour,
      image2: imageFour,
      image3: imageFour,
      productName: 'Warm Basket',
      name: 'Nadia Salem',
      description: 'Acrylic on wood',
      year: 2014,
      reviews: 4100,
      price: 650,
      stars: 5,
      longDescription:
        'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
    },
    {
      productId: 5,
      image1: imageFive,
      image2: imageFive,
      image3: imageFive,
      productName: 'The Vonnegut',
      name: 'Nadia Salem',
      description: 'Oil on canvas',
      year: 2018,
      reviews: 4100,
      price: 650,
      stars: 5,
      longDescription:
        'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
    },
  ];
  console.log(
    'FeaturedPieces rendered in: ',
    renderTime ? renderTime.toFixed(2) : 0,
    'ms',
  );
  return (
    <section className={styles.featuredPieces}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.head__header}>Featured Pieces</h2>
        </div>
        <div className={styles.content}>
          <Slider data={data} art={true}></Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPieces;
