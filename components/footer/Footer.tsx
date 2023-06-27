import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 · Anisa Aviation Quiz · All rights reserved</div>
      <div className={styles.social}>
        <Image src={'https://cdn.iconscout.com/icon/free/png-512/free-facebook-205-448331.png?f=avif&w=256'} className={styles.icon} width={20} height={20} alt='facebook' />
        <Image src={'https://cdn.iconscout.com/icon/free/png-512/free-instagram-63-189784.png?f=avif&w=256'} className={styles.icon} width={20} height={20} alt='instagram' />
        <Image src={'https://cdn.iconscout.com/icon/free/png-512/free-twitter-86-432481.png?f=avif&w=256'} className={styles.icon} width={20} height={20} alt='twitter' />
      </div>
    </div>
  );
}

export default Footer