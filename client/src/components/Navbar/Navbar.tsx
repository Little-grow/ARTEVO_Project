import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

type propsType = {
  logoOnly: boolean;
  renderTime: number;
};

const Navbar = (props: propsType) => {
  const { logoOnly } = props || false;
  if (logoOnly) {
    return (
      <nav>
        <div className={styles.container}>
          <div>
            <NavLink to="/" className={styles.logo}>
              artevo
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <div className={styles.container}>
        <div>
          <NavLink to="/" className={styles.logo}>
            artevo
          </NavLink>
        </div>
        <div className={styles.options}>
          <div className={styles.links}>
            <label htmlFor={styles.menu}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7H19" stroke="#222222" strokeLinecap="round" />
                <path d="M5 12H19" stroke="#222222" strokeLinecap="round" />
                <path d="M5 17H19" stroke="#222222" strokeLinecap="round" />
              </svg>
            </label>
            <input type="checkbox" id={styles.menu} />

            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/artists">ARTISTS</NavLink>
              </li>
              <li>
                <NavLink to="/store?page=1">STORE</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.icons}>
            <ul>
              <li>
                <NavLink to="/search">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.search}>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5853 3.46918C6.87309 3.46918 3.8551 6.45352 3.8551 10.1469C3.8551 13.8403 6.87309 16.8246 10.5853 16.8246C12.1201 16.8246 13.5363 16.3144 14.6696 15.4549L19.4921 20.2359L20.3722 19.3482L15.5923 14.6095C16.6632 13.4275 17.3154 11.8638 17.3154 10.1469C17.3154 6.45352 14.2974 3.46918 10.5853 3.46918ZM5.1051 10.1469C5.1051 7.15402 7.55326 4.71918 10.5853 4.71918C13.6173 4.71918 16.0654 7.15402 16.0654 10.1469C16.0654 13.1398 13.6173 15.5746 10.5853 15.5746C7.55326 15.5746 5.1051 13.1398 5.1051 10.1469Z"
                      fill="#161412"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.cart}>
                    <path
                      d="M5.31 5H2.31M5.55 5L7.71 12.84C7.89029 13.4582 8.26474 14.0021 8.77799 14.3911C9.29123 14.78 9.91603 14.9936 10.56 15H19.3V5H5.55ZM12.31 18.5C12.31 19.3284 11.6384 20 10.81 20C9.98157 20 9.31 19.3284 9.31 18.5C9.31 17.6716 9.98157 17 10.81 17C11.6384 17 12.31 17.6716 12.31 18.5ZM19.31 18.5C19.31 19.3284 18.6384 20 17.81 20C16.9816 20 16.31 19.3284 16.31 18.5C16.31 17.6716 16.9816 17 17.81 17C18.6384 17 19.31 17.6716 19.31 18.5Z"
                      stroke="#1C1C1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink to="/favourites?page=1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.favourites}>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.55299 4C6.03821 4 4 6.03821 4 8.55299C4 12.9303 9.07755 17.1129 11.4497 18.9755C11.452 18.9774 11.4543 18.9792 11.4565 18.981C11.4728 18.9937 11.4949 19.0119 11.5109 19.0245C11.7529 19.205 12.3478 19.6692 12.3478 19.6692C12.3478 19.6692 12.9437 19.2052 13.1848 19.0231C13.1895 19.0208 13.1964 19.0159 13.2011 19.0122C13.2047 19.0094 13.2097 19.0055 13.2133 19.0027C13.2179 18.9987 13.2224 18.9946 13.2269 18.9905C15.5917 17.1345 20.6957 12.9408 20.6957 8.55299C20.6957 6.03821 18.6574 4 16.1427 4C13.7392 4 12.3478 6.08696 12.3478 6.08696C12.3478 6.08696 10.9565 4 8.55299 4Z"
                      stroke="#161412"
                      strokeWidth="1.25"
                    />
                  </svg>
                </NavLink>
              </li>

              <li>
                <NavLink to="/profile">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.profile}>
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="#272D4E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#272D4E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NavLink>
              </li>
              <li className={styles.logout}>
                <NavLink to="/signout">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066" />
                    <path d="M16 12L16.3904 11.6877L16.6403 12L16.3904 12.3123L16 12ZM4 12.5C3.72386 12.5 3.5 12.2761 3.5 12C3.5 11.7239 3.72386 11.5 4 11.5V12.5ZM12.3904 6.68765L16.3904 11.6877L15.6096 12.3123L11.6096 7.31235L12.3904 6.68765ZM16.3904 12.3123L12.3904 17.3123L11.6096 16.6877L15.6096 11.6877L16.3904 12.3123ZM16 12.5H4V11.5H16V12.5Z" />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

