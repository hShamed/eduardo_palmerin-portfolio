import Section from "./Section/Section";
import styles from "./Main.module.css";
import eduardoPic from "../../assets/images/eduardo_pic.webp";
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

const Main = () => {
    return (
        <main className={styles.main}>
            <aside className={styles.timeline}></aside>
            <aside className={styles.borderline}></aside>

            <Section 
                number="01"
                firstColContent={
                    <>
                        <h1 className={styles.sectionTitle}>Eduardo Palmerin</h1>
                        <h3 className={styles.sectionSubtitle}>Ingeniero Industrial | Diseñador Industrial</h3>
                        <button className={styles.sectionButton}>
                            palmerinlopezeduardo@gmail.com
                            <ClipboardDocumentIcon className={styles.icon} />
                        </button>
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
                            <h3 className={styles.sectionSubtitle}>Acerca de mí</h3>
                            <h4 className={styles.sectionThirdTitle}>Experto en diseño CAD y gestión de calidad</h4>
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
            
        </main>
    )
}

export default Main