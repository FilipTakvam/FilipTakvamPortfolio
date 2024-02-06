import React from 'react';
import styles from '../styles/navtrigger.module.scss';

function NavTrigger({ isMobileNavOpen, setIsMobileNavOpen, setIsActive, isActive }) {
    const handleToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        setIsActive(!isActive);
    };

    return (
        <div
            onClick={handleToggle}
            className={`
                ${styles.navTrigger}
                ${isActive ? styles.open : ''}
            `}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default NavTrigger;
