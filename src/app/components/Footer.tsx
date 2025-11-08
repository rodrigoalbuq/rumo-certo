import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__section}>
                        <h3 className={styles.footer__title}>🌎 Rumo Certo</h3>
                        <p className={styles.footer__text}>Descubra os melhores destinos para sua próxima viagem conosco!</p>
                    </div>

                    <div className={styles.footer__section}>
                        <h4 className={styles.footer__subtitle}>Links Úteis</h4>
                        <ul className={styles.footer__list}>
                            <li className={styles.footer__listItem}>
                                <a href="/" className={styles.footer__link}>Início</a>
                            </li>
                            <li className={styles.footer__listItem}>
                                <a href="/destinos" className={styles.footer__link}>Destinos</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footer__section}>
                        <h4 className={styles.footer__subtitle}>Contato</h4>
                        <p className={styles.footer__text}>📧 contato@rumocerto.com.br</p>
                        <p className={styles.footer__text}>📱 (81) 9999-9999</p>
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <p className={styles.footer__copyright}>&copy; 2025 Rumo Certo | Desenvolvido por <a href="https://github.com/rodrigoalbuq" className={styles.footer__link}>Rodrigo Albuquerque</a>. | Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}