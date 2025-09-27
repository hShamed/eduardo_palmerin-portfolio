import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a href="." className={`${styles.navbarTitle} ${styles.navbarLink}`}>EDUARDO</a>
            <ul className={styles.navbarUl}>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>Acerca de mí</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>Experiencia</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
