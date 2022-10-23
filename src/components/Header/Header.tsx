import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.header__link} href=".">
        <img className={styles.header__logo} src={logo} alt="logo" />
        <span className={styles.header__text}>
          <span className={styles.header__dark}>Меди</span>
          <span className={styles.header__light}>Фарм</span>
        </span>
      </a>
    </header>
  );
};

export default Header;
