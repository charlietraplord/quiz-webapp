import React from 'react';
import Image from 'next/image';
import Cont from 'public/contact.svg';
import styles from './contact.module.css';
import Button from '@/components/button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>

      <div className={styles.glitchwrapper}
      >
        <div className={styles.glitch} data-text="Hello, lets Connect">Hello, lets Connect</div>
      </div>
      <br />
      {/* <h1 className={styles.title}>Hey, Talk to us</h1> */}
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={Cont}
            alt='Talk to us'
            fill={true}
            className={styles.img}
          />
        </div>
        <form className={styles.form} action="">
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea placeholder="Your Message" className={styles.txtarea} id="" cols={30} rows={10}></textarea>
          <Button url="#" text="Send Message" />
        </form>
      </div>
    </div>
  );
}

export default Contact;