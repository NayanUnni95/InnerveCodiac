import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import img from '../../assets/images/home/innerve_logo_white.svg';
import styles from './Navbar.module.css';

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [pathname, setPathname] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsNavVisible(false);
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <div id={styles.content} className={styles.visible}>
      <nav className={styles.nav}>
        <div
          className={styles.menu_icon}
          onClick={() => setIsNavVisible(!isNavVisible)}
        ></div>
        <img src={img} alt="Logo" className={styles.logon} />
      </nav>
      <div className={`${styles.overlay} ${isNavVisible && styles.active}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={`${pathname == '/' && styles.visible}`}
              onClick={() => {
                setIsNavVisible(!isNavVisible);
              }}
            >
              HOME {pathname != '/' && <FiArrowUpRight color="#fff" />}
            </Link>
          </li>
          {/* <li>
            <Link to="">ABOUT</Link>
          </li> */}
          <li>
            <Link
              to="/hackathon"
              className={`${pathname == '/hackathon' && styles.visible}`}
            >
              hackathon{' '}
              {pathname != '/hackathon' && <FiArrowUpRight color="#fff" />}
            </Link>
          </li>
          <li>
            <Link
              to="/competitions"
              className={`${
                pathname &&
                pathname.startsWith('/competitions') &&
                styles.visible
              }`}
              onClick={() => {
                setIsNavVisible(!isNavVisible);
              }}
            >
              competitions{' '}
              {pathname && !pathname.startsWith('/competitions') && (
                <FiArrowUpRight color="#fff" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={`${pathname && pathname.startsWith('/events') && styles.visible}`}
              onClick={() => {
                setIsNavVisible(!isNavVisible);
              }}
            >
              events{' '}
              {pathname && !pathname.startsWith('/events') && (
                <FiArrowUpRight color="#fff" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/workshops"
              className={`${pathname && pathname.startsWith('/workshops') && styles.visible}`}
              onClick={() => {
                setIsNavVisible(!isNavVisible);
              }}
            >
              workshops{' '}
              {pathname && !pathname.startsWith('/workshops') && (
                <FiArrowUpRight color="#fff" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/brochure"
              className={`${pathname == '/brochure' && styles.visible}`}
              onClick={() => {
                setIsNavVisible(!isNavVisible);
              }}
            >
              brochure{' '}
              {pathname != '/brochure' && <FiArrowUpRight color="#fff" />}
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              className={`${pathname == '/schedule' && styles.visible}`}
              onClick={() => {
                setIsNavVisible(!isNavVisible);
              }}
            >
              schedule{' '}
              {pathname != '/schedule' && <FiArrowUpRight color="#fff" />}
            </Link>
          </li>
          {/* <li>
            <Link
              to="/sponsors"
              className={`${pathname == '/sponsors' && styles.visible}`}
              onClick={() => {
                setIsNavVisible(!isNavVisible);
              }}
            >
              Sponsors{' '}
              {pathname != '/sponsors' && <FiArrowUpRight color="#fff" />}
            </Link>
          </li>
          <li>
            <Link
              to="/rules"
              className={`${pathname == '/rules' && styles.visible}`}
              onClick={() => {
                setIsNavVisible(!isNavVisible);
              }}
            >
              Rules {pathname != '/rules' && <FiArrowUpRight color="#fff" />}
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
