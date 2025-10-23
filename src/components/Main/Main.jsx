import React, { useState, useEffect } from "react";

import Article from "./Article/Article";
import Button from "../Button/Button";
import Section from "../Section/Section";

import styles from "./Main.module.css";

import aboutPic from "../../assets/images/about_pic.webp";
import eduardoPic from "../../assets/images/eduardo_pic.webp";
import kobelcoPic from "../../assets/images/kobelco_pic.webp";
import paileraPic from "../../assets/images/pailera_pic.webp";
import rodelacPic from "../../assets/images/rodelac_pic.webp";

import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

const Main = ({ onMouseEnter, onMouseLeave }) => {
    const [currentText, setCurrentText] = useState(0);
    const texts = ["Ingeniero Industrial", "Diseñador Industrial"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length); // Cycle through texts
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.main}>
            <aside className={styles.timeline}></aside>
            <aside className={styles.borderline}></aside>

            <Section 
                number="01"
                firstColContent={
                    <>
                        <h1 className={styles.sectionTitle}>Eduardo Palmerin</h1>
                        <div className={styles.sectionTextWrapper}>
                            {texts.map((text, index) => (
                                <h3 
                                    key={index}
                                    className={`${styles.sectionSlideText} ${
                                        currentText === index ? styles.slideIn : styles.slideOut
                                    }`}
                                >
                                    {text}
                                </h3>
                            ))}
                        </div>
                        <Button 
                            onEnter={onMouseEnter} 
                            onLeave={onMouseLeave} 
                            color="primary"
                            text="palmerinlopezeduardo@gmail.com"
                            icon={<ClipboardDocumentIcon />}
                        />
                    </>
                }
                secondColContent={
                    <img 
                        className={styles.sectionImageAlt}
                        src={eduardoPic}
                        alt="Eduardo Palmerin Picture"
                    />
                }
            />
            <div className={styles.corner}></div>

            <div className={styles.sectionWrapper}>
                <Section 
                    number="02"
                    firstColContent={
                        <>
                            <h3>Acerca de mí</h3>
                            <h4>Experto en diseño CAD y gestión de calidad</h4>
                        </>
                    }
                    secondColContent={
                        <>
                            <p className={styles.sectionText}>
                                ¡Hola! soy Ingeniero Industrial con experiencia en Softwares como AutoCAD,
                                Autodesk Inventor, Solid Works y Inkscape.También familiarizado con técnicas 
                                de mejora continua y gestión de indicadores de calidad, implementando 
                                estrategias para incrementar la eficiencia a nivel multiempresa.
                            </p>
                            <img 
                                className={styles.sectionImage}
                                src={aboutPic}
                                alt="Eduardo Palmerin Picture"
                            />
                        </>
                    }
                />
            </div>

            <Section 
                number="03"
                firstColContent={
                    <>
                        <h3>Experiencia</h3>
                        <h4>+2 años</h4>
                    </>
                }
                secondRowContent={
                    <>
                        <Article 
                            img={paileraPic}
                            alt="Pailera Picture"
                            title="Soldadura y Fabricación Industrial (Pailera)"
                            dates="Septiembre, 2022 a Junio, 2023"
                            activities={[
                                "Corte y Grabado laser",
                                "Toma de medidas de maquinaria y desarrollo de planos industriales",
                                "Implementación de soluciones tecnológicas avanzadas",
                                "Cumplimiento de normas y reglamentos técnicos",
                                "0 no conformidades en auditorías internas y externas durante 10 meses consecutivos",
                                "Dominio sobre AutoCAD y modelado 3D de objetos(Autodesk Inventor)",
                            ]}
                        />
                        <Article 
                            img={kobelcoPic}
                            alt="KOBELCO Picture"
                            title="Gil maquinaria SA. de CV. / KOBELCO"
                            dates="Julio de 2024 - Diciembre de 2024 "
                            activities={[
                                "Desarrollo de calendario/agenda de servicios mensuales con bases de datos",
                                "Desarrollo de manuales de tiempos estimados/actividades administrativas",
                                "Generación de Checklist de levantamiento de necesidades de refacciones",
                                "Creación de manuales de puestos administrativos",
                                "Reducción del 12% en siniestros no asegurados",
                            ]}
                        />
                        <Article 
                            img={rodelacPic}
                            alt="RODELAC Picture"
                            title="RODELAC ELECTROMECANICA INDUSTRIAL"
                            dates="Julio de 2025 - Presente"
                            activities={[
                                "Dibujo, diseño y modelado 3D de planos eléctricos",
                                "Desarrollo de manuales de uso de sistema eléctrico",
                                "Gestión de personal en planta",
                                "Vectorizado de logo",
                                "Creación de manuales de uso de sistema eléctrico de planta",
                                "Termino de proyecto un mes antes de la fecha estimada",
                            ]}
                        />
                    </>
                }
            />
        </main>
    )
}

export default Main