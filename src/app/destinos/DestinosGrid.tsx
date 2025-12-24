import { destinos } from '@/data/destinos';
import CardDestino from '@/app/components/CardDestino';
import styles from './DestinosGrid.module.css';

export default function DestinosGrid() {
  return (
    <section className={styles.destinosGrid__section}>
      <div className={styles.destinosGrid__container}>
        <h2 className={styles.destinosGrid__title}>Lista de destinos</h2>
        <div className={styles.destinosGrid__grid}>
          {destinos.map((destino, index) => (
            <CardDestino key={destino.id} destino={destino} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
