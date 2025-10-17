import Button from '../Button/Button';
import Section from '../Section/Section';

import styles from './Footer.module.css';

const Footer = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <footer className={styles.footer}>
            <Section 
                number="04"
                firstColContent={
                    <>
                        <h3>Contacto</h3>
                        <h4>¿Tienes curiosidad sobre qué podemos crear juntos?</h4> 
                        <div className={styles.contactContainer}>
                            <Button
                                onEnter={onMouseEnter} 
                                onLeave={onMouseLeave} 
                                color="secondary"
                                text="Ponerse en contacto"
                                href="mailto:palmerinlopezeduardo@gmail.com"
                            />
                            <div className={styles.availableText}>
                                <div className={styles.sonarContainer}>
                                    <span className={styles.sonar}></span>
                                </div>
                                Disponible para trabajar
                            </div>
                        </div>

                    </>
                }
                secondColContent={
                    <>
                        <ul>
                            <li className={styles.socialItem}>
                                <a 
                                    href="https://www.linkedin.com/in/eduardo-palmerin/" 
                                    target="_blank" 
                                    className={styles.socialLink}
                                >
                                    💼 LinkedIn
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a href="mailto:palmerinlopezeduardo@gmail.com" className={styles.socialLink}>
                                    📧 palmerinlopezeduardo@gmail.com
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a href="tel:+17142343877" className={styles.socialLink}>
                                    🇺🇸 +1 714 234-3877
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a href="tel:+524435050471" className={styles.socialLink}>
                                    🇲🇽 +52 443 505-0471
                                </a>
                            </li>
                        </ul>
                    </>
                }
            />
            <div className={styles.footerBottom}>
                <p>Diseñada y desarrollada por <a href="https://hiram-ambriz.vercel.app/">Hiram Ambriz</a></p>
                <p>Eduardo Palmerin © 2025</p>
            </div> 
        </footer>
    );
}

export default Footer;
