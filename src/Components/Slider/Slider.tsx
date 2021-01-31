import React, { RefObject } from 'react';
import styles from './Slider.module.scss';
import Skills from '../Skills';
import Projects from '../Projects';

interface ISlider {
  refs: Array<RefObject<HTMLElement>>;
}

const Slider: React.FC<ISlider> = ({ refs }) => {
  return (
    <main className={styles.Slider}>
      <section ref={refs[0]} className={styles.aboutMe}>
        <article>
          <h2>👋 Hi, I&apos;m Ed</h2>
          <h3>I&apos;m an Oxford based musician turned software developer.</h3>
          <p>
            Moving from a musicial language to programming languages matched my passion for creating something fresh,
            beautiful and meaningful from a blank canvas.
          </p>
          <p>Please have a look through my projects, download my CV and feel free to get in touch.</p>
        </article>
      </section>
      <section ref={refs[1]} className={styles.projects}>
        <Projects />
      </section>
      <section ref={refs[2]}>
        <Skills />
      </section>
    </main>
  );
};

export default Slider;
