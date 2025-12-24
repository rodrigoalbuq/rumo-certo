import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const themeIcon = '🌓';
  const ariaLabel = 'Alternar tema';

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>🌎 Rumo Certo</Link>
        <div className={styles.header__actions}>
          <button
            id="menu-toggle"
            className={styles.header__menuButton}
            aria-label="Abrir menu"
            aria-expanded={false}
            aria-controls="nav-principal"
          >
            <span className={styles.header__menuIcon} />
          </button>
          <button
            id="theme-toggle"
            className={styles.header__themeButton}
            aria-label={ariaLabel}
          >
            {themeIcon}
          </button>

          <nav
            id="nav-principal"
            className={styles.header__nav}
          >
            <Link href="/" className={styles.header__navLink}>Início</Link>
            <Link href="/destinos" className={styles.header__navLink}>Destinos</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}