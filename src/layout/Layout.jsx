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
      <div 
      id={styles.loadingWrapper}
        style={{
          // width: '100%',
          // height: '100vh',
          // backgroundColor: 'rgba(133, 43, 43, 0.4)',
          // backgroundColor:'linear-gradient(to right, #000000,rgb(133, 43, 43))',
          // position: 'absolute',
          // zIndex: '3',
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>
          {pathname && pathname.replace(/^\/+/, '')}
        </h1>
      </div>
      {pathname === '/' && <FooterSecondary />}
    </div>
  );
}

export default Layout;
