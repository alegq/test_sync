import Image from 'next/image';
import styles from './page.module.css';
import RootLayout from './layout';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <RootLayout>
      <main>
        <Header />
        <div className={styles.main}></div>
        <Footer />
      </main>
    </RootLayout>
  );
}
