import React, { RefObject } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../data/fa-library';

interface IHeader {
  refs: Array<RefObject<HTMLElement>>;
}

const Header: React.FC<IHeader> = ({ refs }) => {
  return (
    <header className={styles.Header}>
      <h1>Edward Horsey</h1>
      <ul>
        <li
          onClick={() => {
            refs[0].current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FontAwesomeIcon className={styles.headerIcon} icon={['fas', 'user']} />
        </li>
        <li
          onClick={() => {
            refs[1].current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FontAwesomeIcon className={styles.headerIcon} icon={['fas', 'palette']} />
        </li>
        <li
          onClick={() => {
            refs[2].current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FontAwesomeIcon className={styles.headerIcon} icon={['fas', 'envelope-open']} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
