import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { destinos } from '@/data/destinos';
import { DestinoDetalhesProps } from '@/types';
import styles from './destinoDetalhes.module.css';

export async function generateMetadata({ params }: DestinoDetalhesProps): Promise<Metadata> {
  const destino = destinos.find(d => d.id === parseInt(params.id));

  if (!destino) {
    return {
      title: 'Destino não encontrado',
    };
  }

  return {
    title: `${destino.nome} - Rumo Certo`,
    description: destino.descricao,
  };
}

export default function DestinoDetalhes({ params }: DestinoDetalhesProps) {
  const destino = destinos.find(d => d.id === parseInt(params.id));

  if (!destino) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <section className={styles.destinoDetalhes__hero}>
        <div className={styles.destinoDetalhes__heroImage}>
          <Image
            src={destino.imagem}
            alt={destino.nome}
            width={1200}
            height={600}
            className={styles.destinoDetalhes__image}
            priority
          />
          <div className={styles.destinoDetalhes__heroOverlay}>
            <div className={styles.destinoDetalhes__heroContent}>
              <h1 className={styles.destinoDetalhes__heroTitle}>{destino.nome}</h1>
              <p className={styles.destinoDetalhes__heroLocation}>📍 {destino.localizacao}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.destinoDetalhes__content}>
        <div className={styles.destinoDetalhes__container}>
          <div className={styles.destinoDetalhes__grid}>
            <div className={styles.destinoDetalhes__mainContent}>
              <h2 className={styles.destinoDetalhes__sectionTitle}>Sobre o Destino</h2>
              <p className={styles.destinoDetalhes__description}>{destino.descricao}</p>

              <div className={styles.destinoDetalhes__highlights}>
                <h3>Destaques</h3>
                <ul>
                  <li>🏖️ Praias paradisíacas</li>
                  <li>🏛️ Rica cultura local</li>
                  <li>🍽️ Gastronomia típica</li>
                  <li>🎭 Vida noturna animada</li>
                </ul>
              </div>
            </div>

            <div className={styles.destinoDetalhes__sidebar}>
              <div className={styles.destinoDetalhes__infoCard}>
                <h3>Informações da Viagem</h3>
                <div className={styles.destinoDetalhes__infoItem}>
                  <span className={styles.destinoDetalhes__infoLabel}>💰 Preço médio:</span>
                  <span className={styles.destinoDetalhes__infoValue}>{destino.preco}</span>
                </div>
                <div className={styles.destinoDetalhes__infoItem}>
                  <span className={styles.destinoDetalhes__infoLabel}>🗓️ Melhor época:</span>
                  <span className={styles.destinoDetalhes__infoValue}>{destino.melhorEpoca}</span>
                </div>
                <div className={styles.destinoDetalhes__infoItem}>
                  <span className={styles.destinoDetalhes__infoLabel}>📍 Localização:</span>
                  <span className={styles.destinoDetalhes__infoValue}>{destino.localizacao}</span>
                </div>
              </div>

              <div className={styles.destinoDetalhes__actions}>
                <button className={styles.destinoDetalhes__bookButton}>
                  Reservar Agora
                </button>
                <Link href="/destinos" className={styles.destinoDetalhes__backButton}>
                  Voltar aos Destinos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return destinos.map((destino) => ({
    id: destino.id.toString(),
  }));
}