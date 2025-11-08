import { Metadata } from 'next';
import { destinos } from '@/data/destinos';
import CardDestino from '@/app/components/CardDestino';
import styles from './destinos.module.css';

export const metadata: Metadata = {
    title: 'Destinos - Rumo Certo',
    description: 'Explore os melhores destinos turísticos do Brasil. Encontre sua próxima aventura!',
};

export default function Destinos() {
    return (
        <div className={styles.destinos__page}>
            <section className={styles.destinos__hero}>
                <div className={styles.destinos__container}>
                    <h1 className={styles.destinos__title}>Nossos Destinos</h1>
                    <p className={styles.destinos__subtitle}>
                        Explore os lugares mais incríveis do Brasil e planeje sua próxima aventura
                    </p>
                </div>
            </section>

            <section className={styles.destinos__section}>
                <div className={styles.destinos__container}>
                    <div className={styles.destinos__grid}>
                        {destinos.map((destino) => (
                            <CardDestino key={destino.id} destino={destino} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}