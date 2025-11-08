import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          🌎 Rumo Certo
        </Link>
        
        <nav className={styles.header__nav}>
          <Link href="/" className={styles.header__navLink}>
            Início
          </Link>
          <Link href="/destinos" className={styles.header__navLink}>
            Destinos
          </Link>
        </nav>
      </div>
    </header>
  );
}