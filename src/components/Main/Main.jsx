import styles from "./Main.module.css";
import eduardoPic from "../../assets/images/eduardo_pic.webp";
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

const Main = () => {
    return (
        <main className={styles.main}>
            <aside className={styles.timeline}></aside>
            <aside className={styles.borderline}></aside>
            <p className={styles.sectionNumber}>01</p>
            <section className={styles.row}>
                <div className={styles.col}>
                    <h1 className={styles.sectionTitle}>Eduardo Palmerin</h1>
                    <h3 className={styles.sectionSubtitle}>Ingeniero Industrial | Diseñador Industrial</h3>
                    <button className={styles.sectionButton}>
                        palmerinlopezeduardo@gmail.com
                        <ClipboardDocumentIcon className={styles.icon} />
                    </button>
                </div>
                <div className={styles.col}>
                    <img 
                        className={styles.sectionImage}
                        src={eduardoPic}
                        alt="Eduardo Palmerin Picture"
                    />
                </div>
            </section>
            <div className={styles.corner}></div>
            <div className={styles.splitline}></div>
        </main>
    )
}

export default Main