import React, { RefObject } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../data/fa-library';

interface IHeader {
  refs: Array<RefObject<HTMLElement>>;
}

const Header: React.FC<IHeader> = ({ refs }) => {
  const scroll = (slide: RefObject<HTMLElement>) => {
    return slide.current?.scrollIntoView({ behavior: 'smooth'});
  }
  return (
    <header className={styles.Header}>
      <h1>Edward Horsey</h1>
      <ul>
        <li
          onClick={() => scroll(refs[0])}
        >
          <FontAwesomeIcon className={styles.headerIcon} icon={['fas', 'user']} />
        </li>
        <li
          onClick={() => scroll(refs[1])}
          >
          <FontAwesomeIcon className={styles.headerIcon} icon={['fas', 'palette']} />
        </li>
        <li
          onClick={() => scroll(refs[2])}
        >
          <FontAwesomeIcon className={styles.headerIcon} icon={['fas', 'envelope-open']} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
