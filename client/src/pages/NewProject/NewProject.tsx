import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import styles from './NewProject.module.css';
import { useUsers } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const NewProject = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [isForSale, setIsForSale] = useState(false);
  const { products, setProducts, user } = useUsers();
  const navigate = useNavigate();

  const isFileAllowed = (file) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const extension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes('.' + extension);
  };

  function handleFileChange(e, number) {
    const file = e.target.files[0];
    if (file && isFileAllowed(file)) {
      const reader = new FileReader();
      reader.onload = () => {
        if (number === 1) {
          setImage1(reader.result);
        } else if (number === 2) {
          setImage2(reader.result);
        } else if (number === 3) {
          setImage3(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  function handleProductCreate(e) {
    e.preventDefault();

    const name = e.target.name?.value;
    const description = e.target.description?.value;
    const longDescription = e.target.longDescription?.value;
    const price = e.target.price?.value || -1;
    const forSale = e.target.forSale?.value;

    if (
      !name ||
      !description ||
      !longDescription ||
      !image1 ||
      !image2 ||
      !image3
    ) {
      alert('Please fill all the fields');
      return;
    }

    if (forSale && !price) {
      alert('Please fill the price field');
      return;
    }

    const newProductId =
      Math.max(...products.map((product) => product.productId)) + 1;

    const newProduct = {
      productId: newProductId,
      image1: image1,
      image2: image2,
      image3: image3,
      productName: name,
      name: user.name,
      description: description,
      year: new Date().getFullYear(),
      reviews: 0,
      price: price === -1 ? null : price,
      stars: 1,
      longDescription: longDescription,
      artistId: user.id,
      forSale: isForSale,
    };

    setProducts((products) => [...products, newProduct]);
    navigate(`/product/${newProductId}`);
  }

  return (
    <>
      <Navbar logoOnly={false} />
      <section className={styles.newproject}>
        <div className={styles.container}>
          <h1 className={styles.head}>New Product</h1>
          <form action="" onSubmit={(e) => handleProductCreate(e)}>
            <Input
              inputLabel="Name"
              label="Name"
              inputType="text"
              name="name"
            />
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
            <input
              type="checkbox"
              id="forSale"
              onChange={(e) => setIsForSale((old) => !old)}
            />
            <label htmlFor="forSale"> For Sale?</label>
            {isForSale && (
              <Input
                inputLabel="Price"
                label="Price"
                inputType="text"
                name="price"
              />
            )}

            <input
              type="file"
              onChange={(e) => handleFileChange(e, 1)}
              accept=".jpg, .jpeg, .png"
              id="img1"
            />
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 2)}
              accept=".jpg, .jpeg, .png"
              id="img2"
            />
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 3)}
              accept=".jpg, .jpeg, .png"
              id="img3"
            />

            <p className={styles.add}>Add 3 images of your product</p>
            <div className={styles.newproject__images__preview}>
              <label
                htmlFor="img1"
                className={styles.newproject__images__preview__image}>
                {image1 ? (
                  <img
                    src={image1}
                    alt=""
                    className={styles.newproject__images__preview__image__img}
                  />
                ) : (
                  '+'
                )}
              </label>
              <label
                htmlFor="img2"
                className={styles.newproject__images__preview__image}>
                {image2 ? (
                  <img
                    src={image2}
                    alt=""
                    className={styles.newproject__images__preview__image__img}
                  />
                ) : (
                  '+'
                )}
              </label>
              <label
                htmlFor="img3"
                className={styles.newproject__images__preview__image}>
                {image3 ? (
                  <img
                    src={image3}
                    alt=""
                    className={styles.newproject__images__preview__image__img}
                  />
                ) : (
                  '+'
                )}
              </label>
            </div>
            <Button type="signup">Create New Project</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewProject;

