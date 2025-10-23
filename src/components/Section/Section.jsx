import styles from "./Section.module.css";

const Section = ({ number, firstColContent, secondColContent, secondRowContent }) => {

    if (secondColContent) {
        secondColContent = <div className={styles.sectionCol}>{secondColContent}</div>;
    }

    return (
        <section id={"sectionNumber" + number} className={styles.section}>
            <p className={styles.sectionNumber}>{number}</p>
            <div className={`${styles.sectionRow} ${styles.sectionFirstRow}`}>
                <div className={styles.sectionCol}>
                    {firstColContent}
                </div>
                {secondColContent}
            </div>
            <div className={`${styles.sectionRow} ${styles.sectionSecondRow}`}>
                {secondRowContent}
            </div>
        </section>
    )
}

export default Section