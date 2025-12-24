import Link from 'next/link';
import styles from '@/app/home.module.css';

export default function HomeCta() {
  return (
    <section className={styles.home__cta}>
      <div className={styles.home__container}>
        <h2>Pronto para a aventura?</h2>
        <p>Comece a planejar sua próxima viagem agora mesmo</p>
        <Link href="/destinos" className={styles.home__ctaButton}>Ver Todos os Destinos</Link>
      </div>
    </section>
  );
}
