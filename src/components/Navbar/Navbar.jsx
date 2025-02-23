import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './Navbar.module.css';

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [pathname, setPathname] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsNavVisible(false);
    setPathname(location.pathname);
    // console.log(location.pathname);
  }, [location.pathname]);

  return (
    <div id={styles.content} className={styles.visible}>
      <nav className={styles.nav}>
        <div
          className={styles.menu_icon}
          onClick={() => setIsNavVisible(!isNavVisible)}
        ></div>
        {/* <img
          //   src=""
          alt="Logo"
          className={styles.logon}
        /> */}
      </nav>
      <div className={`${styles.overlay} ${isNavVisible && styles.active}`}>
        <ul>
          <li>
            <Link to="/" className={`${pathname == '/' && styles.visible}`}>
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
              className={`${pathname == '/competitions' && styles.visible}`}
            >
              competitions{' '}
              {pathname != '/competitions' && <FiArrowUpRight color="#fff" />}
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={`${pathname == '/events' && styles.visible}`}
            >
              events {pathname != '/events' && <FiArrowUpRight color="#fff" />}
            </Link>
          </li>
          <li>
            <Link
              to="/workshops"
              className={`${pathname == '/workshops' && styles.visible}`}
            >
              workshops{' '}
              {pathname != '/workshops' && <FiArrowUpRight color="#fff" />}
            </Link>
          </li>
          {/* <li>
            <Link to="/rules" className={`${pathname == '/rules' && styles.visible}`}>RULES</Link>
          </li> */}
        </ul>
      </div>
      {/* <div className="header">
        <h1>Events</h1>
        <p>innerve' 25 presents</p>
      </div> */}
    </div>
  );
}

export default Navbar;
