import Dropdown from '../Dropdown';
import styles from './Form.module.scss';
import { useContext } from 'react';
import { Context } from '../../App';
import { Option, Patient, ScanType, scanTypeText } from '../../types';
import patients from '../../patients';

const patientOptions: Option<Patient>[] = patients.map((p) => ({
  name: p.name,
  origin: p,
}));
const scanTypeOptions = (Object.keys(scanTypeText) as ScanType[]).map((p) => ({
  name: scanTypeText[p],
  origin: p,
}));

const Form = () => {
  const { updatePatient, updateScanType } = useContext(Context)!;

  return (
    <div className={styles.form}>
      <h2 className={styles.form__title}>Карта пациента</h2>
      <div className={styles.form__list}>
        <div className={styles.form__item}>
          <span className={styles.form__name}>Пациент</span>
          <Dropdown optionList={patientOptions} updateOption={updatePatient} />
        </div>
        <div className={styles.form__item}>
          <span className={styles.form__name}>Тип снимка</span>
          <Dropdown
            optionList={scanTypeOptions}
            updateOption={updateScanType}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
