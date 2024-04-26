import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import styles from './NewProject.module.css';

const NewProject = () => {
  const [images, setImages] = useState([]);

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
        setImages((images) => [...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <Navbar logoOnly={false} />
      <section className={styles.newproject}>
        <div className={styles.container}>
          <Input inputLabel="Name" label="Name" inputType="text" name="name" />
          <Input
            inputLabel="Desciption"
            label="Desciption"
            inputType="text"
            name="description"
          />
          <Input
            inputLabel="Long Desciption"
            label="Long Desciption"
            inputType="text"
            name="longDescription"
          />
          <Input
            inputLabel="Price"
            label="Price"
            inputType="text"
            name="price"
          />

          {images.length !== 3 && (
            <input
              type="file"
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png"
            />
          )}

          {images && (
            <div className={styles.newproject__images__preview}>
              {images.map((image) => {
                return (
                  <div className={styles.newproject__images__preview__image}>
                    <img
                      src={image}
                      alt=""
                      className={styles.newproject__images__preview__image__img}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <Button type="signup">Create New Project</Button>
        </div>
      </section>
    </>
  );
};

export default NewProject;
