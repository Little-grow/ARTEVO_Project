import { createContext, useContext, useEffect, useState } from 'react';
import imageDefault from '../../public/images/profile/profile.png';

import imageOne from '../../public/images/product/1.png';
import imageTwo from '../../public/images/product/2.png';
import imageThree from '../../public/images/product/3.png';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourits] = useState([]);
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([
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
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await fetch('https://localhost:7244/api/Artists/AllArtists');
        const data1 = await res1.json();
        const users = data1.$values;
        setUsers(users);
      } catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('token', '');
    setToken('');
  }, [])


  // useEffect(() => {
  //   const user = await fetch('https://localhost:7244/api/Auth/Login', {
  //     body: JSON.stringify(data)
  //   });
  // }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        cart,
        setCart,
        favourites,
        setFavourits,
        user,
        setUser,
        products,
        setProducts,
        token,
        setToken,
      }}>
      {isloading ? (
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            fontFamily: 'Inter, sans-serif',
          }}>
          isLoading
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export function useUsers() {
  return useContext(UserContext);
}

export default UserProvider;

