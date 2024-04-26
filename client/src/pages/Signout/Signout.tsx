import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUsers } from '../../Context/UserContext';

const Signout = () => {
  const navigate = useNavigate();
  const { setUser, setUuid } = useUsers();

  useEffect(() => {
    localStorage.setItem('uuid', '');
    setUuid('');
    setUser(null);
    navigate('/signin');
  }, []);
};

export default Signout;

