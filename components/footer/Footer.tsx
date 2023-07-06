import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 · Anisa Aviation Quiz · All rights reserved</div>
      <div className={styles.social}>
        <Image src={'https://img.icons8.com/?size=1x&id=b2h5ow1Hfzpc&format=png'} className={styles.icon} width={35} height={35} alt='facebook' />
        <Image src={'https://img.icons8.com/?size=1x&id=7QPcOVZoGlmf&format=png'} className={styles.icon} width={35} height={35} alt='instagram' />
        <Image src={'https://img.icons8.com/?size=1x&id=jMvPLEfQTQWU&format=png'} className={styles.icon} width={35} height={35} alt='twitter' />
      </div>
    </div>
  );
}

export default Footer