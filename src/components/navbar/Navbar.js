import { useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/ManufacLogo.png'
export default function Navbar({ onHeightChange }) {
    const navbarRef = useRef(null);

    useEffect(() => {
        if (navbarRef.current) {
            const navbarHeight = navbarRef.current.clientHeight;
            onHeightChange(navbarHeight);
        }
    }, [onHeightChange]);

    return (
        <nav ref={navbarRef} className={styles.container}>
            <div>
                <img className={styles.logo} src={logo} alt='logo' />
            </div>
        </nav>
    );
}
