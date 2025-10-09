import Article from "./Article/Article";
import Button from "../Button/Button";
import Section from "../Section/Section";

import styles from "./Main.module.css";

import eduardoPic from "../../assets/images/eduardo_pic.webp";
import kobelcoPic from "../../assets/images/kobelco_pic.webp";
import paileraPic from "../../assets/images/pailera_pic.webp";

import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

const Main = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <main className={styles.main}>
            <aside className={styles.timeline}></aside>
            <aside className={styles.borderline}></aside>

            <Section 
                number="01"
                firstColContent={
                    <>
                        <h1 className={styles.sectionTitle}>Eduardo Palmerin</h1>
                        <h3>Ingeniero Industrial | Diseñador Industrial</h3>
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
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quarrymagazine.com%2Fwp-content%2Fuploads%2F2022%2F09%2FDSC_1261-scaled.jpg&f=1&nofb=1&ipt=84d8151ec0ff6e8ad06685debbf512e8cdfa37565868a4cfded64cccf7a90b5b"
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
                            img={paileraPic}
                            alt="RODELA Picture"
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