import Empty from '../Empty';
import styles from './Display.module.scss';
import { useContext, useEffect } from 'react';
import { Context } from '../../App';

const Display = () => {
  const { patient, scanType, updateCurrentImg, updateIsModalOpen } =
    useContext(Context)!;
  const isEmpty = patient === null || scanType === null;
  let imgUrl = '';

  const openModal = () => updateIsModalOpen(true);

  switch (scanType) {
    case 'arm':
      imgUrl = patient?.scans[0].img || '';
      break;
    case 'chest':
      imgUrl = patient?.scans[1].img || '';
      break;
    case 'head':
      imgUrl = patient?.scans[2].img || '';
      break;
  }

  useEffect(() => {
    updateCurrentImg(imgUrl);
  }, [imgUrl]);

  return (
    <div className={styles.display}>
      {isEmpty ? (
        <Empty />
      ) : (
        <img
          className={styles.display__img}
          src={imgUrl}
          alt="scan"
          onClick={openModal}
        />
      )}
    </div>
  );
};

export default Display;
