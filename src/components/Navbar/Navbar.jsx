import React, { useState } from "react";

import styles from "./Navbar.module.css";

import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleLinkClick = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <a href="." className={`${styles.navbarTitle} ${styles.navbarLink}`}>EDUARDO</a>
                <ul className={styles.navbarUl}>
                    <li className={styles.navbarItem}>
                        <a href="#sectionNumber02" className={styles.navbarLink}>Acerca de mí</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a href="#sectionNumber03" className={styles.navbarLink}>Experiencia</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a href="#sectionNumber04" className={styles.navbarLink}>Contacto</a>
                    </li>
                </ul>
                <button className={styles.navbarBtnIcon} onClick={handleModalToggle}>
                    <Bars3Icon className={styles.navbarIcon} />
                </button>
            </nav>

            <div className={`${styles.modal} ${isModalOpen ? styles.modalOpen : ""}`}>
                <button className={styles.modalCloseBtn} onClick={handleModalToggle}>
                    <XMarkIcon className={styles.navbarIcon} />
                </button>
                <ul className={styles.modalMenu}>
                    <li className={styles.modalMenuItem}>
                        <a href="#sectionNumber02" className={styles.modalMenuLink} onClick={handleLinkClick}>
                            Acerca de mí
                        </a>
                    </li>
                    <li className={styles.modalMenuItem}>
                        <a href="#sectionNumber03" className={styles.modalMenuLink} onClick={handleLinkClick}>
                            Experiencia
                        </a>
                    </li>
                    <li className={styles.modalMenuItem}>
                        <a href="#sectionNumber04" className={styles.modalMenuLink} onClick={handleLinkClick}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
