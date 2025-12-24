import Link from 'next/link';
import styles from "@/app/home.module.css";
import HomeFeatures from "@/app/components/HomeFeatures";
import HomeCta from "@/app/components/HomeCta";

export default function Home() {
  return (
    <div className={styles.home__page}>
      <section className={styles.home__hero}>
        <div className={styles.home__heroContent}>
          <h1 className={styles.home__heroTitle}>
            Descubra o Brasil com
            <span className={styles.home__highlight}> Rumo Certo</span>
          </h1>
          <p className={styles.home__heroDescription}>
            Explore os destinos mais incríveis do nosso país com Rumo Certo, seu maior portal de viagens. De praias paradisíacas
            a cidades históricas, encontre sua próxima aventura agora mesmo!
          </p>
          <Link href="/destinos" className={styles.home__ctaButton}>Explorar Destinos</Link>
        </div>
      </section>

      <HomeFeatures />

      <HomeCta />
    </div>
  );
}
