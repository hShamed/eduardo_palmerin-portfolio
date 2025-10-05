import React, { useState } from 'react';
import styles from "./Article.module.css";

const Article = ({ img, alt, title, dates, activities }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    const cardWrapperStyle = {
        transition: 'transform 0.6s cubic-bezier(0.45, 0, 0.55, 1)',
        transformStyle: 'preserve-3d',
        transform: isFlipped 
        ? 'rotateY(180deg) scale(1)' 
        : isHovering 
            ? 'scale(1.03)' 
            : 'scale(1)',
        boxShadow: isHovering 
        ? '0 16px 30px rgba(0, 0, 0, 0.25)' 
        : '0 4px 12px rgba(0, 0, 0, 0.1)',
    };

    const faceStyle = {
        backfaceVisibility: 'hidden',
    };

    const frontFaceStyle = {
        ...faceStyle,
        transform: 'rotateY(0deg)', 
    };

    const backFaceStyle = {
        ...faceStyle,
        transform: 'rotateY(180deg)',
    };

    return (
         <article 
            className={styles.articleContainer}     
            onClick={handleCardClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div style={cardWrapperStyle}>
                <div style={frontFaceStyle}>
                    <img 
                        className={styles.articleImage}
                        src={img}
                        alt={alt}
                    />
                    <h3 className={styles.articleTitle}>
                        {title}
                    </h3>
                </div>
                <div style={backFaceStyle} className={styles.articleBackFace}>
                    <header className={styles.articleHeader}>
                        {dates}
                    </header>
                    <ul>
                        {activities.map((activity, index) => (
                            <li key={index} className={styles.articleActivity}>
                                • {activity}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Article