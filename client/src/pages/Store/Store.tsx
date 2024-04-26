import Navbar from '../../components/Navbar/Navbar';
import PagesSlider from '../../components/PagesSlider/PagesSlider';
import Products from '../../components/Products/Products';
import styles from './Store.module.css';

import imageOne from '../../../public/images/store/1.png';
import imageTwo from '../../../public/images/store/2.png';
import imageThree from '../../../public/images/store/3.png';
import imageFour from '../../../public/images/store/4.png';
import imageFive from '../../../public/images/store/5.png';
import imageSix from '../../../public/images/store/6.png';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import RenderTimeWrapper from '../../RenderTimeWrapper';

const Store = ({ renderTime }) => {
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

  const [searchParams, setSearchParams] = useSearchParams();
  const pageMaximumContent = 3;
  const dataLenght = data.length;
  const pages = Math.ceil(dataLenght / pageMaximumContent);
  const pageNumber =
    Number(searchParams.get('page')) <= pages
      ? Number(searchParams.get('page'))
      : 1; // Default to page 1 if no page param

  useEffect(() => {
    setSearchParams({ page: String(pageNumber) });
  }, [pageNumber, setSearchParams]);

  console.log(
    'Store rendered in: ',
    renderTime ? renderTime.toFixed(2) : 0,
    'ms',
  );

  return (
    <>
      <RenderTimeWrapper>
        <Navbar logoOnly={false} />
      </RenderTimeWrapper>
      <main>
        <Products
          data={data}
          pageNumber={pageNumber}
          pageMaximumContent={pageMaximumContent}
        />
        <PagesSlider
          pageNumber={pageNumber}
          setSearchParams={setSearchParams}
          pages={pages}
        />
      </main>
    </>
  );
};

export default Store;
