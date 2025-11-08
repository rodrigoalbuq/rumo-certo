import Image from 'next/image';
import Link from 'next/link';
import { CardDestinoProps } from '@/types';
import styles from './CardDestino.module.css';

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageContainer}>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          width={400}
          height={300}
          className={styles.card__image}
        />
        <div className={styles.card__overlay}>
          <Link href={`/destinos/${destino.id}`} className={styles.card__viewButton}>
            Ver Detalhes
          </Link>
        </div>
      </div>

      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{destino.nome}</h3>
        <p className={styles.card__location}>📍 {destino.localizacao}</p>
        <p className={styles.card__description}>{destino.descricao}</p>
        <div className={styles.card__footer}>
          <span className={styles.card__price}>{destino.preco}</span>
          <span className={styles.card__season}>🗓️ {destino.melhorEpoca}</span>
        </div>
      </div>
    </div>
  );
}