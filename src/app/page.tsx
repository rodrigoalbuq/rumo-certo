import Link from "next/link";
import styles from "@/app/home.module.css";

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
          <Link href="/destinos" className={styles.home__ctaButton}>
            Explorar Destinos
          </Link>
        </div>
      </section>

      <section className={styles.home__features}>
        <div className={styles.home__container}>
          <h2 className={styles.home__sectionTitle}>Por que escolher o Rumo Certo?</h2>
          <div className={styles.home__featuresGrid}>
            <div className={styles.home__feature}>
              <div className={styles.home__featureIcon}>🗺️</div>
              <h3>Destinos Exclusivos</h3>
              <p>Descobra lugares únicos e experiências autênticas em todo o Brasil</p>
            </div>
            <div className={styles.home__feature}>
              <div className={styles.home__featureIcon}>💰</div>
              <h3>Melhores Preços</h3>
              <p>Ofertas especiais e preços competitivos para sua viagem dos sonhos</p>
            </div>
            <div className={styles.home__feature}>
              <div className={styles.home__featureIcon}>🎯</div>
              <h3>Planejamento Fácil</h3>
              <p>Informações detalhadas para planejar sua viagem com confiança</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.home__cta}>
        <div className={styles.home__container}>
          <h2>Pronto para a aventura?</h2>
          <p>Comece a planejar sua próxima viagem agora mesmo</p>
          <Link href="/destinos" className={styles.home__ctaButton}>
            Ver Todos os Destinos
          </Link>
        </div>
      </section>
    </div>
  );
}
