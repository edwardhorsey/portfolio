import React, { RefObject } from 'react';
import styles from './Slider.module.scss';
import Skills from '../Skills';
import Projects from '../Projects';
import Ed from '../Ed';

interface ISlider {
  refs: Array<RefObject<HTMLElement>>;
}

const Slider: React.FC<ISlider> = ({ refs }) => {
  return (
    <main className={styles.Slider}>
      <section ref={refs[0]} className={styles.aboutMe}>
        <Ed />
      </section>
      <section ref={refs[1]} className={styles.projects}>
        <Projects />
      </section>
      <section ref={refs[2]} className={styles.skills}>
        <Skills />
      </section>
    </main>
  );
};

export default Slider;
