import styles from './Modal.module.scss';
import { Context } from '../../App';
import { useContext, useState } from 'react';
import classNames from 'classnames';

const Modal = () => {
  const { currentImg, isModalOpen, updateIsModalOpen } = useContext(Context)!;

  const optionalClass = { [styles.open]: isModalOpen };
  const classes = classNames(styles.modal, optionalClass);

  const closeModal = () => updateIsModalOpen(false);

  return (
    <div className={classes}>
      <div className={styles.modal__overlay} onClick={closeModal}></div>
      <div className={styles.modal__content}>
        <img className={styles.modal__img} src={currentImg || ''} alt="scan" />
      </div>
    </div>
  );
};

export default Modal;
