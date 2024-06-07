import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>ESHANIZED</h1>
          <h1>ICONIZED</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Snigdha OS</h1>
            <h6 className={styles.bio}># Be silent when it is time to hear!</h6>
            <Link href="/projects">
              <button className={styles.button}>Download Snigdha OS</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}><i class="fa-brands fa-github"></i>Follow on Github</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
