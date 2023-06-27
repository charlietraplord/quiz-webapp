import Image from 'next/image';
import Hero from 'public/1.png';
import styles from './home.module.css';
import Button from '@/components/button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Welcome To The Anisa Quiz Application.
        </h1>
        <p className={styles.description}>
          Turning your aviation dreams into a reality.
          We offer up to date aviation quizes for any of your needs.
        </p>
        <Button url="/about" text="About Us" />
      </div>
      <div className={styles.item}></div>
      <Image className={styles.img} src={Hero} alt="hero" />
    </div>
  );
}
