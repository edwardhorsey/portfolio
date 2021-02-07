import React, { ReactElement, useRef } from 'react';
import styles from './App.module.scss';
import Container from './Components/Container';
import Header from './Components/Header/Header';

const App = (): ReactElement => {
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  return (
    <div className={styles.App}>
      <Header refs={refs} />
      <Container refs={refs} />
    </div>
  );
};

export default App;
