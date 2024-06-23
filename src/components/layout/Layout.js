import { useState } from 'react';
import Navbar from "../navbar/Navbar";
import styles from './Layout.module.css';

export default function Layout({ children }) {
    const [navbarHeight, setNavbarHeight] = useState(0);

    const handleNavbarHeightChange = (height) => {
        setNavbarHeight(height);
    };

    return (
        <div className={styles.container} style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
            <Navbar onHeightChange={handleNavbarHeightChange} />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
