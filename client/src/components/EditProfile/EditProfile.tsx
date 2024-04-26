import Input from '../Input/Input';
import styles from './EditProfile.module.css';
import { useUsers } from '../../Context/UserContext';
import { useState } from 'react';

const EditProfile = ({ setEditProfile }) => {
  const { user, users, setUsers, setUser } = useUsers();

  const [image, setImage] = useState(user.image);

  const isFileAllowed = (file) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const extension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes('.' + extension);
  };

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file && isFileAllowed(file)) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage((image) => reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (password.length < 3) {
      return;
    }

    if (username !== user.username || email !== user.email) {
      users.map((existing) => {
        if (existing.username === username) {
          return;
        } else if (existing.email === email) {
          return;
        }
      });
    }
    const newUsers = users.map((existing) => {
      if (existing.id === user.id) {
        return {
          ...existing,
          name,
          email,
          username,
          password,
          image,
        };
      }
      return existing;
    });

    setUsers(newUsers);
    setUser((existing) => {
      return { ...existing, name, username, email, password, image };
    });

    setEditProfile(false);
  }

  return (
    <section className={styles.editProfile}>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.editProfile__head}>
          <h3>Edit Profile</h3>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".jpg, .jpeg, .png"
            id="image"
            className="fileOut"
            name="image"
          />
          <label htmlFor="image" className={styles.image}>
            {image ? <img src={image} /> : <p>profile picture</p>}
          </label>
        </div>
        <div className="inputs">
          <Input
            inputLabel="Name"
            label="Name"
            inputType="text"
            name="name"
            value={user.name}
          />
          <Input
            inputLabel="Username"
            label="Username"
            inputType="text"
            name="userName"
            value={user.userName}
          />
          <Input
            inputLabel="Email"
            label="Email"
            inputType="text"
            name="email"
            value={user.email}
          />
          <Input
            inputLabel="Password"
            label="Passowrd"
            inputType="password"
            name="password"
          />
        </div>
        <div className={styles.editProfile__buttons}>
          <button
            className={styles.editProfile__buttons__cancel}
            onClick={(e) => {
              e.preventDefault();
              setEditProfile(false);
            }}>
            Cancel
          </button>
          <button className={styles.editProfile__buttons__save}>Save</button>
        </div>
      </form>
    </section>
  );
};

export default EditProfile;

