import { useEffect, useState } from 'react';
import EditProfile from '../../components/EditProfile/EditProfile';
import Navbar from '../../components/Navbar/Navbar';
import ProfileData from '../../components/ProfileData/ProfileData';
import ProfileWork from '../../components/ProfileWork/ProfileWork';
import styles from './Profile.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useUsers } from '../../Context/UserContext';

const Profile = ({ search }) => {
  const [editProfile, setEditProfile] = useState(false);
  const { profileId } = useParams();
  const navigate = useNavigate();

  const { users, user, uuid, setUser } = useUsers();

  console.log(user);

  const searchedUser = search
    ? users.find((existing) => existing.id === Number(profileId))
    : user;

  if (search && !searchedUser) {
    return (
      <>
        <Navbar logoOnly={false} />
        <div className={styles.emptyContainer}>
          <p>No user With this Id found</p>
        </div>
      </>
    );
  }

  useEffect(() => {
    if (user.id === searchedUser.id) {
      console.log(user);
      console.log(searchedUser);
      navigate('/profile ');
    } else {
      console.log(user);
      console.log(searchedUser);
    }
  }, []);

  return (
    <>
      <Navbar logoOnly={false} />
      <section className={styles.profile}>
        <div className={styles.container}>
          <ProfileData
            setEditProfile={setEditProfile}
            searchedUser={searchedUser}
          />
          <ProfileWork />
        </div>
        {editProfile && <EditProfile setEditProfile={setEditProfile} />}
      </section>
    </>
  );
};

export default Profile;
