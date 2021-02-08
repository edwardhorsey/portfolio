import React, { ReactElement, useRef } from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Container from './Components/Container';
import Footer from './Components/Footer';

const App = (): ReactElement => {
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  return (
    <div className={styles.App}>
      <Header refs={refs} />
      <Container refs={refs} />
      <Footer />
    </div>
  );
};

export default App;
