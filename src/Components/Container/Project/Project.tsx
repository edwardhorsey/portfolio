import React, { useState } from 'react';
import styles from './Project.module.scss';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactModal from 'react-modal';

type ProjectObj = {
  name: string;
  description: string;
  url: string;
  github: string;
  backgroundImg: number;
  tech: string[];
};

interface IProject {
  key: string;
  project: ProjectObj;
}

const Project: React.FC<IProject> = ({ project }) => {
  const [modal, setModal] = useState(false)
  const openModal = () => !modal && setModal(true);
  const closeModal = () => setModal(false);

  const { name, description, url, github, backgroundImg, tech } = project;
  const style = `${styles.Project} ${styles['background' + backgroundImg]}`;

  return (
    <article className={style} key={nanoid()} onClick={openModal}>
      <h2>{name}</h2>
      <ReactModal
        appElement={document.getElementById('root') as HTMLElement}
        onRequestClose={closeModal}
        isOpen={modal}
        className={styles.projectModal}
      >
        <section className={styles.content}>
          <FontAwesomeIcon className={styles.closeModal} onClick={closeModal} icon={['fas', 'window-close']} />
          <div className={`${styles.projectContentImage} ${styles['background' + backgroundImg]}`}>
            <div className={styles.backgroundOverlay}>
              <h2>{name}</h2>
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.description}>
              <p>{description}</p>
              <div className={styles.icons}>
                <a href={url} rel="noreferrer" target="_blank">
                  Go to <FontAwesomeIcon className={styles.icon} icon={['fas', 'eye']} />
                </a>
                <a href={github} rel="noreferrer" target="_blank">
                  Code <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
                </a>
              </div>
            </div>
            <div className={styles.techUsed}>
              {tech.map(item => <p>{item}</p>)}
            </div>
          </div>
        </section>
      </ReactModal>
    </article>
  );
};

export default Project;
