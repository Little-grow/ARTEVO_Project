import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../Context/UserContext';
import { useEffect } from 'react';

const Signout = () => {
  const navigate = useNavigate();
  const { setUuid } = useUsers();

  useEffect(() => {
    localStorage.setItem('uuid', '');
    setUuid('');
  }, []);

  return navigate('/signin');
};

export default Signout;
