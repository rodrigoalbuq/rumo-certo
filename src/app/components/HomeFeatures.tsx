import styles from '@/app/home.module.css';

export default function HomeFeatures() {
  return (
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
  );
}
