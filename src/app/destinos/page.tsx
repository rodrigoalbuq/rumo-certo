import { Metadata } from 'next';
import styles from './destinos.module.css';
import DestinosGrid from '@/app/destinos/DestinosGrid';

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

            <DestinosGrid />
        </div>
    );
}