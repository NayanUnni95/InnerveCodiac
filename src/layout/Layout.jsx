import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import FooterSecondary from '../components/FooterSecondary/Footer';
import styles from './Layout.module.css';

function Layout() {
  const [pathname, setPathname] = useState(null);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
    setVisible(true);
  }, [location.pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <Outlet />
      {pathname != '/' && (
        <div
          id={styles.loadingWrapper}
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
            pointerEvents: visible ? 'auto' : 'none',
          }}
        >
          <h1 style={{ fontSize: '3rem' }}>
            {pathname && pathname.replace(/^\/+/, '')}
          </h1>
        </div>
      )}
      {pathname === '/' && <FooterSecondary />}
    </div>
  );
}

export default Layout;
