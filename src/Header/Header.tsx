import React, { RefObject } from 'react';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';

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
          1
        </li>
        <li
          onClick={() => {
            refs[1].current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          2
        </li>
        <li
          onClick={() => {
            refs[2].current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          3
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  refs: PropTypes.array.isRequired,
};

export default Header;
