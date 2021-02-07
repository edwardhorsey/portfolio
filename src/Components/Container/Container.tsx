import React, { RefObject } from 'react';
import styles from './Container.module.scss';
import Skills from '../Skills';
import Projects from '../Projects';
import Ed from '../Ed';

interface IContainer {
  refs: Array<RefObject<HTMLElement>>;
}

const Container: React.FC<IContainer> = ({ refs }) => {
  return (
    <main className={styles.Container}>
      <Ed ref={refs[0]} />
      <Projects ref={refs[1]} />
      <Skills ref={refs[2]} />
    </main>
  );
};

export default Container;
