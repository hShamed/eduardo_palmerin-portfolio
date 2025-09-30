import styles from "./Section.module.css";

const Section = ({ number, firstColContent, secondColContent }) => {
    return (
        <section className={styles.section}>
            <p className={styles.sectionNumber}>{number}</p>
            <div className={styles.sectionRow}>
                <div className={styles.sectionCol}>
                    {firstColContent}
                </div>
                <div className={styles.sectionCol}>
                    {secondColContent}
                </div>
            </div>
        </section>
    )
}

export default Section