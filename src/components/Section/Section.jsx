import styles from "./Section.module.css";

const Section = ({ number, firstColContent, secondColContent, secondRowContent }) => {
    return (
        <section className={styles.section}>
            <p className={styles.sectionNumber}>{number}</p>
            <div className={`${styles.sectionRow} ${styles.sectionFirstRow}`}>
                <div className={styles.sectionCol}>
                    {firstColContent}
                </div>
                <div className={styles.sectionCol}>
                    {secondColContent}
                </div>
            </div>
            <div className={`${styles.sectionRow} ${styles.sectionSecondRow}`}>
                {secondRowContent}
            </div>
        </section>
    )
}

export default Section