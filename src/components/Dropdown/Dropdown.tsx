import { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';
import classNames from 'classnames';
import { Option } from '../../types';

interface Props<T> {
  optionList: Option<T>[];
  updateOption: (opt: Option<T>) => void;
}

const Dropdown = <T,>({ optionList, updateOption }: Props<T>) => {
  const dropdown = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>('');

  const optionalClass = { [styles.open]: isOpen };
  const classes = classNames(styles.dropdown, optionalClass);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  const outsideClickHandler = (e: Event) => {
    if (!dropdown.current?.contains(e.target as HTMLElement)) closeDropdown();
  };

  const updateDropdown = (option: Option<T>) => {
    setValue(option.name);
    updateOption(option);
    closeDropdown();
  };

  useEffect(() => {
    document.addEventListener('click', outsideClickHandler);

    return () => document.removeEventListener('click', outsideClickHandler);
  });

  return (
    <div className={classes} ref={dropdown}>
      <div className={styles.dropdown__default} onClick={toggleDropdown}>
        {value}
      </div>
      <ul className={styles.dropdown__list}>
        {optionList.map((option, index) => {
          const optionalButtonClass = {
            [styles.active]: option.name === value,
          };
          const buttonClasses = classNames(
            styles.dropdown__button,
            optionalButtonClass
          );

          return (
            <li className={styles.dropdown__item} key={index}>
              <button
                className={buttonClasses}
                onClick={() => updateDropdown(option)}
              >
                {option.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
