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
};

interface IProject {
  key: string;
  project: ProjectObj;
}

const Project: React.FC<IProject> = ({ project }) => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal);
  const { name, description, url, github, backgroundImg } = project;
  const style = `${styles.Project} ${styles['background' + backgroundImg]}`;

  return (
    <article className={style} key={nanoid()} onClick={toggleModal}>
      <h2>{name}</h2>
      <ReactModal
        isOpen={modal}
        className={styles.projectModal}
      >
        <section className={styles.content}>
          <button className={styles.closeModal} onClick={toggleModal} />
          <div className={`${styles.projectContentImage} ${styles['background' + backgroundImg]}`}>
            <h2>{name}</h2>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.description}>
              <p>{description}</p>
              <div className={styles.icons}>
                <a href={url} rel="noreferrer" target="_blank">
                  <FontAwesomeIcon className={styles.icon} icon={['fas', 'eye']} />
                </a>
                <a href={github} rel="noreferrer" target="_blank">
                  <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
                </a>
              </div>
            </div>
            <div className={styles.techUsed}>
              Tech used
            </div>
          </div>
        </section>
      </ReactModal>
    </article>
  );
};

export default Project;
