import React, { RefObject } from 'react';
import styles from './Slider.module.scss';
import projects from '../../data/projects';
import { nanoid } from 'nanoid';
import Project from '../Project';

interface ISlider {
  refs: Array<RefObject<HTMLElement>>;
}

const Slider: React.FC<ISlider> = ({ refs }) => {
  return (
    <main className={styles.Slider}>
      <section ref={refs[0]} className={styles.aboutMe}>
        <p>ED</p>
      </section>
      <section ref={refs[1]} className={styles.projects}>
        {projects && projects.map((project) => <Project key={nanoid()} project={project} />)}
      </section>
      <section ref={refs[2]} className={styles.skills}>
        SKILLS CONTACT
      </section>
    </main>
  );
};

export default Slider;
