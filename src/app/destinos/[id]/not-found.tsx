import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Destino não encontrado</h2>
        <p className={styles.description}>
          Parece que este destino não existe em nosso portal. 
          Que tal explorar outros lugares incríveis?
        </p>
        <Link href="/destinos" className={styles.backButton}>
          Ver Todos os Destinos
        </Link>
      </div>
    </div>
  );
}