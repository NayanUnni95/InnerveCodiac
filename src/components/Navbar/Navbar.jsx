import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

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
            <Link to="/">HOME</Link>
          </li>
          {/* <li>
            <Link to="">ABOUT</Link>
          </li> */}
          <li>
            <Link to="/competitions">COMPETITIONS</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
          <li>
            <Link to="/workshops">WORKSHOPS</Link>
          </li>
          {/* <li>
            <Link to="/rules">RULES</Link>
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
