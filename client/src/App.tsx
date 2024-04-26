import './normailzer.css';
import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import NewProject from './pages/NewProject/NewProject';
import UserProvider, { useUsers } from './Context/UserContext';
import Signout from './pages/Signout/Signout';
import Favourites from './pages/Favourites/Favourites';
import Artists from './pages/Artists/Artists';
import Search from './pages/Search/Search';

function App() {
  const { uuid, user } = useUsers();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/signin" />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/signin"
          element={user ? <Navigate to="/" /> : <Signin />}
        />
        <Route
          path="/store"
          element={user ? <Store /> : <Navigate to="/signin" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/signin" />}
        />
        <Route
          path="/new"
          element={user ? <NewProject /> : <Navigate to="/signin" />}
        />
        <Route
          path="/product/:productId"
          element={user ? <Product /> : <Navigate to="/signin" />}
        />
        <Route
          path="/favourites"
          element={user ? <Favourites /> : <Navigate to="/signin" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile search={false} /> : <Navigate to="/signin" />}
        />
        <Route
          path="/artist/:profileId"
          element={user ? <Profile search={true} /> : <Navigate to="/signin" />}
        />
        <Route
          path="/artists"
          element={user ? <Artists /> : <Navigate to="/signin" />}
        />
        <Route
          path="/search"
          element={user ? <Search /> : <Navigate to="/signin" />}
        />

        <Route
          path="/signout"
          element={
            <>
              <Signout />
            </>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

