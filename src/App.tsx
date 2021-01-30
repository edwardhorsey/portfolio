import React, { ReactElement, createRef } from 'react';
import styles from './App.module.scss';
import Slider from './Components/Slider/Slider';
import Header from './Components/Header/Header';

const App = (): ReactElement => {
  const refs = [createRef<HTMLElement>(), createRef<HTMLElement>(), createRef<HTMLElement>()];

  return (
    <div className={styles.App}>
      <Header refs={refs} />
      <Slider refs={refs} />
    </div>
  );
};

export default App;
