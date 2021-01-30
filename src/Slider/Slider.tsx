import React, { RefObject } from 'react';
import styles from './Slider.module.scss';
import PropTypes from 'prop-types';

interface ISlider {
  refs: Array<RefObject<HTMLElement>>;
}

const Slider: React.FC<ISlider> = ({ refs }) => {
  return (
    <main className={styles.Slider}>
      <section ref={refs[0]} className={styles.section}>
        ED
      </section>
      <section ref={refs[1]} className={styles.section}>
        PROJECTS
      </section>
      <section ref={refs[2]} className={styles.section}>
        SKILLS CONTACT
      </section>
    </main>
  );
};

Slider.propTypes = {
  refs: PropTypes.array.isRequired,
};

export default Slider;
