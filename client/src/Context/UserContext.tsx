import { createContext, useContext, useEffect, useState } from 'react';
import imageDefault from '../../public/images/profile/profile.png';

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
  ]);

  useEffect(() => {
    if (!user) {
      console.log(users);
      const currentUser = users.find(
        (existinguser) => existinguser.uuid === uuid,
      );
      if (!currentUser) {
        setUuid('');
      } else {
        setUser(currentUser);
      }
    } else {
      console.log(user);
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
      }}
    >
      {isloading ? (
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            fontFamily: 'Inter, sans-serif',
          }}
        >
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
