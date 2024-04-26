import { useUsers } from '../../Context/UserContext';
import Navbar from '../../components/Navbar/Navbar';
import PagesSlider from '../../components/PagesSlider/PagesSlider';
import Products from '../../components/Products/Products';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Store = () => {
  const { products } = useUsers();

  const [searchParams, setSearchParams] = useSearchParams();
  const pageMaximumContent = 3;
  const dataLenght = products.length;
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
        <Products
          data={products}
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

