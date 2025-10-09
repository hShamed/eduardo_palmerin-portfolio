import React, { useRef, useEffect, useCallback, useState } from 'react';
import styles from './Button.module.css';

const Button = React.memo(({ onEnter, onLeave, children, type = 'button', color, text, icon = null, href = null }) => {
    const buttonRef = useRef(null);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const el = buttonRef.current;

        if (el) {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);

            return () => {
                el.removeEventListener('mouseenter', onEnter);
                el.removeEventListener('mouseleave', onLeave);
            };
        }
    }, [onEnter, onLeave]);

    const buttonColor = color === 'primary' ? styles.buttonColorPrimary : styles.buttonColorSecondary;
    const baseClasses = `${styles.button} ${buttonColor}`;

    if (!icon) {
        const handleClick = useCallback(() => {
            if (href) {
                window.location.href = href;
            }
        }, [href]);

        return (
            <button 
                ref={buttonRef}
                className={baseClasses} 
                onClick={handleClick}
                type={type}
                onMouseEnter={onEnter} 
                onMouseLeave={onLeave}
            >
                {text || children}
            </button>
        );
    } else {
        const handleClick = useCallback(() => {
            navigator.clipboard.writeText(text || children);
            setShowNotification(true);

            setTimeout(() => {
                setShowNotification(false);
            }, 2000);
        }, [text, children]);
        
        const iconWithStyles = React.cloneElement(icon, {
            className: `${icon.props.className || ''} ${styles.icon}`,
        });

        return (
            <>
                <button 
                    className={baseClasses}
                    onClick={handleClick}
                    type={type}
                    onMouseEnter={onEnter} 
                    onMouseLeave={onLeave}
                >
                    {text || children}
                    {iconWithStyles}
                </button>

                {showNotification && (
                    <div className={styles.notification}>
                        <p>¡Texto copiado al portapapeles!</p>
                    </div>
                )}
            </>
        );
    }
});

export default Button;