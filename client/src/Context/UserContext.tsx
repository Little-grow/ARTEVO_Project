import { createContext, useContext, useEffect, useState } from 'react';
import imageDefault from '../../public/images/profile/profile.png';
import image1 from '../../public/images/featured_artists/1.png';
import image2 from '../../public/images/featured_artists/2.png';
import image3 from '../../public/images/featured_artists/3.png';
import imageOne from '../../public/images/product/1.png';
import imageTwo from '../../public/images/product/2.png';
import imageThree from '../../public/images/product/3.png';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [uuid, setUuid] = useState(localStorage.getItem('uuid'));
  const [cart, setCart] = useState([]);
  const [favourites, setFavourits] = useState([]);
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([
    {
      id: 1,
      uuid: '1465asd6',
      name: 'Amr Shoukry',
      username: 'amr',
      email: 'amr@gmail.com',
      password: '123',
      image: imageDefault,
      followers: [],
      following: [],
      products: {
        forSale: [],
        portfolio: [],
      },
    },
    {
      id: 2,
      uuid: '1789',
      name: 'Nour',
      username: 'nour',
      email: 'amr2@gmail.com',
      password: '123',
      image: imageDefault,
      followers: [],
      following: [],
      products: {
        forSale: [],
        portfolio: [],
      },
    },
    {
      id: 3,
      uuid: '1s789',
      name: 'Tarek',
      username: 'tarek',
      email: 'tarek@gmail.com',
      password: '123',
      image: image1,
      followers: [],
      following: [],
      products: {
        forSale: [],
        portfolio: [],
      },
    },
    {
      id: 4,
      uuid: '1b789',
      name: 'Nadia',
      username: 'nadia',
      email: 'nadia@gmail.com',
      password: '123',
      image: image2,
      followers: [],
      following: [],
      products: {
        forSale: [],
        portfolio: [],
      },
    },
    {
      id: 5,
      uuid: '1m789',
      name: 'Layla',
      username: 'layla',
      email: 'layla@gmail.com',
      password: '123',
      image: image3,
      followers: [],
      following: [],
      products: {
        forSale: [],
        portfolio: [],
      },
    },
  ]);
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
    if (!user) {
      const currentUser = users.find(
        (existinguser) => existinguser.uuid === uuid,
      );
      if (!currentUser) {
        setUuid('');
      } else {
        setUser(currentUser);
      }
    }
    setIsLoading(false);
  }, [uuid, user]);

  return (
    <UserContext.Provider
      value={{
        users,
        uuid,
        setUuid,
        setUsers,
        cart,
        setCart,
        favourites,
        setFavourits,
        user,
        setUser,
        products,
        setProducts,
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

