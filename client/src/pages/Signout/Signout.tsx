import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUsers } from '../../Context/UserContext';

const Signout = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useUsers();

  useEffect(() => {
    localStorage.setItem('token', '');
    setToken('')
    setUser(null);
    navigate('/signin');
  }, []);
};

export default Signout;

