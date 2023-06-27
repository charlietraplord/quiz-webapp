import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="hero"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Anisa</h1>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we ?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vel risus a arcu
            faucibus tempor ut eget sem. Duis quis orci at justo molestie
            <br />
            <br />
            vehicula
            in eu odio. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Praesent nec felis sed nunc pretium
            congue non ac eros. Sed lacinia efficitur nulla vitae pulvinar
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vel risus a arcu
            faucibus tempor ut eget sem. Duis quis orci at justo molestie
            <br />
            <br />
            vehicula
            in eu odio. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Praesent nec felis sed nunc pretium
            congue non ac eros. Sed lacinia efficitur nulla vitae pulvinar
          </p>
          <Button url="/contact" text="Contact us" />
        </div>
      </div>
    </div>
  );
}

export default About;