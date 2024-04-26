import { useEffect } from 'react';
import { useUsers } from '../../Context/UserContext';
import Products from '../../components/Products/Products';
import PagesSlider from '../../components/PagesSlider/PagesSlider';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Favourites.module.css';

const Favourites = () => {
  const { favourites } = useUsers();
  const pageMaximumContent = 16;
  const [searchParams, setSearchParams] = useSearchParams();
  const dataLenght = favourites.length;
  const pages = Math.ceil(dataLenght / pageMaximumContent);
  const pageNumber =
    Number(searchParams.get('page')) <= pages
      ? Number(searchParams.get('page'))
      : 1; // Default to page 1 if no page param

  useEffect(() => {
    setSearchParams({ page: String(pageNumber) });
  }, [pageNumber, setSearchParams]);

  return (
    <>
      <Navbar logoOnly={false} />
      <main>
        {favourites.length === 0 ? (
          <div className={styles.container}>
            <h1>You have no favourites yet, Try to Add Some!</h1>
          </div>
        ) : (
          <>
            <Products
              data={favourites}
              pageNumber={pageNumber}
              pageMaximumContent={pageMaximumContent}
            />
            <PagesSlider
              pageNumber={pageNumber}
              setSearchParams={setSearchParams}
              pages={pages}
            />
          </>
        )}
      </main>
    </>
  );
};

export default Favourites;

