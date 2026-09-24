import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'

export function Navbar() {
    const location = useLocation();


    return (
        <nav className={styles['menu-nav']}>
            <div className={styles.logo}>
                <Link to="/" className={styles['titulo-principal']}>
                    SeeMovie🎬
                </Link>
            </div>

            <ul className={styles['nav-links']}>
                <li>
                    <Link
                        to="/"
                        style={{
                            textDecoration: 'none',
                            color: location.pathname === '/' ? '#fff' : '#aaa',
                            fontWeight: location.pathname === '/' ? 'bold' : 'normal',
                            transition: 'color 0.2s',
                        }}>
                        Catálogo
                    </Link>
                </li>

                <li>
                    <Link
                        to="/favoritos"
                        style={{
                            textDecoration: 'none',
                            color: location.pathname === '/favoritos' ? '#ffffff' : '#aaaaaa',
                            fontWeight: location.pathname === '/favoritos' ? '700' : '400',
                            transition: 'color 0.2s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                        }}>
                        Minha lista
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
