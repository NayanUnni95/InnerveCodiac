import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import FooterSecondary from '../components/FooterSecondary/Footer';
import styles from './Layout.module.css';

function Layout() {
  const [pathname, setPathname] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <Outlet />
      {pathname === '/' && <FooterSecondary />}
    </div>
  );
}

export default Layout;
