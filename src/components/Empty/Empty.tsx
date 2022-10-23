import styles from './Empty.module.scss';
import folder from '../../assets/icons/folder.svg';

const Empty = () => {
  return (
    <div className={styles.empty}>
      <img className={styles.empty__icon} src={folder} alt="folder" />
      <h3 className={styles.empty__title}>Пусто</h3>
      <p className={styles.empty__text}>
        Выберите параметры из выпадающего списка
      </p>
    </div>
  );
};

export default Empty;
